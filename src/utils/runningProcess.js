//utils/runningProcess.js
const { exec } = require('child_process');

function getAllRunningServices(){
    return new Promise((resolve, reject) => {
        const command = process.platform === 'win32' ? 'tasklist /fo csv /nh /fi "STATUS eq running"' : 'ps -A -o pid,command';
        exec(command, (error, stdout, stderr) => {
            if (error) {
              reject(`Error executing command: ${error.message}`);
              return;
            }
            if (stderr) {
              reject(`Command error: ${stderr}`);
              return;
            }
      
            // Parse the output to extract PIDs and service names
            const processes = stdout.trim().split('\n');
            const services = processes.map(process => {
            if (process === '') return null; // Skip empty lines
            const parts = process.split(',').map(part => part.trim().replace(/"/g, ''));
            const pid = parts[1];
            const pname = parts[0];
            return { pname,pid};
            }).filter(Boolean);
         
            resolve(services);
          });

    });
}


module.exports = { getAllRunningServices };