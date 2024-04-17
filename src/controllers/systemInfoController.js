// controllers/infoController.js
const os = require('os');
const {findPercentage,convertBytesToMB,summarizeDiskInfo } = require("../utils/customFunctions");
const nodeDiskInfo = require('node-disk-info');
const {getAllRunningServices} = require('../utils/runningProcess');
const logSystemInfoRequest = require('../services/systemInfoService');

exports.systemInfo = async (req, res) => {
    try {
        
        const current_time = new Date();

        //disk usage 
        let disk_info;
        await nodeDiskInfo.getDiskInfo()
         .then(disks => {
             disk_info = summarizeDiskInfo(disks)
         })
         .catch(err => {
             console.error(err);
        });
         
        const systemInfo = {
             Platform: os.platform(),
             Type: os.type(),
             Arch: os.arch(),
             HardDisk:disk_info
        };
    
        // ram details
        const totalMemMB = convertBytesToMB(os.totalmem()); // Convert bytes to MB
        const freeMemMB = convertBytesToMB(os.freemem());  // Convert bytes to MB
        const usedMemMB = totalMemMB - freeMemMB;
    
        const ramUsage = {
            "TotalMemory": totalMemMB+" MB"  ,
            "FreeMemory": freeMemMB+" MB | "+findPercentage(freeMemMB,totalMemMB)+"%", 
            "UsedMemory": usedMemMB+" MB | "+findPercentage(usedMemMB,totalMemMB)+"%",
          };
    
    
        // active services 
        let services = await getAllRunningServices()
       
        const data = {
            SystemInfo:systemInfo,
            RAM : ramUsage,
            RunningServices : services,
            TimeLogged:current_time,
          }
        
        const response = await logSystemInfoRequest.storeTheInfoRequest(data);
        return res.json({response});

    }catch (err) {
        res.status(500).json({ message: err.message });
    }
};