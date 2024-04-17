let summarizeDiskInfo = (disks) =>{

    let hard_disk_details = [];
    let total_disk_space = 0;
    let total_used_disk_space = 0 ;
    let total_free_disk_space = 0;

    for (const disk of disks) {
        let disk_name = disk.mounted;
        disk_name = disk_name. replace(":", "");
        let total_disk_blocks = convertBytesToMB(disk.blocks)+" MB";
        let disk_available_space = convertBytesToMB(disk.available)+" MB | "+findPercentage(disk.available,disk.blocks)+"%";
        let disk_used_space = convertBytesToMB(disk.used)+" MB | "+findPercentage(disk.used,disk.blocks)+"%";

        hard_disk_details.push(
            {
                "Disk" : disk_name,
                "TotalSpace": total_disk_blocks,
                "FreeSpace" : disk_available_space,
                "UsedSpace": disk_used_space
            }
        )
        total_disk_space += disk.blocks; 
        total_used_disk_space += disk.used;
        total_free_disk_space +=  disk.available;
    
    }
    const result = {
        "TotalSpace" : convertBytesToMB(total_disk_space)+" MB",
        "FreeSpace" :convertBytesToMB(total_free_disk_space)+ " MB | "+findPercentage(total_free_disk_space,total_disk_space)+"%", 
        "UsedSpace":convertBytesToMB(total_used_disk_space) + " MB |"+findPercentage(total_used_disk_space,total_disk_space)+"%", 
        "Drives":hard_disk_details
    }
    return result


}

let findPercentage = (value, total_value) => {
   let percentage =  (value/total_value) * 100 ;

   if (isNaN(percentage)) {
        return 0;
    }
    return percentage.toFixed(2);   
};

let convertBytesToMB = (bytes) =>{
    let mb = bytes /  (1024 * 1024);
    return mb.toFixed(2);
}

module.exports = {
    findPercentage,
    convertBytesToMB,
    summarizeDiskInfo
  };
  