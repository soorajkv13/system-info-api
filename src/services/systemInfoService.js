// services/systemInfoService.js
const systemInfoRepository = require("../repositories/systemInfoRepository.js");

// store all system info
exports.storeTheInfoRequest = async (systemInfo) => {
    return await systemInfoRepository.saveSystemInfo(systemInfo);
};