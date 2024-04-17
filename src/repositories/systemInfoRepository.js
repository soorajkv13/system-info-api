// repositories/systemInfoRepository.js
const SystemInfo = require("../models/system_info");

// Create event
exports.saveSystemInfo = async (info) => {
    // const data = JSON.parse(JSON.stringify(info));
    return await SystemInfo.create(info);
  };