const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'dev', 'readonly'],
        default: 'readonly'
    },
    projects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Project',
        default: []
    }
})

module.exports = mongoose.model('User', UserSchema)
