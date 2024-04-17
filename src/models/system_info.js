// models/system_info.js
const mongoose = require("mongoose");
const date = Date.now;
const { randomUUID } = require("crypto");
const collection = process.env.MONGO_COLLECTION_SYSTEM_INFO
const systemInfoSchema = new mongoose.Schema(
  {
    _id: { type: String, default: () => randomUUID() },
    TimeLogged: { type: String, required: false },
    SystemInfo: { type: Object, required: false },
    RAM: { type: Object, required: false },
    RunningServices: { type: Object, required: false },
    CreatedAt: { type: Date, default: date },
  },
  {versionKey: false,}
);

module.exports = mongoose.model(
  "store_system_info",
  systemInfoSchema,
  collection
);
