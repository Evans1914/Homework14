const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: String, required: true }
});

const Storage = mongoose.model("Storage", StorageSchema);

module.exports = Storage;
