const mongoose = require("mongoose");

const AuditLogSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  action: { type: String, required: true },  
  details: { type: String },  
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AuditLog", AuditLogSchema);
