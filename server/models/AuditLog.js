const mongoose = require('mongoose')

const AuditLog = new mongoose.Schema({
    userId: String, // user who did action XYZ
    action: String, // CRUD 
    timestamp: String // date + time of action
})

module.exports = mongoose.model('AuditLog', AuditLog)