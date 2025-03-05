const mongoose = require("mongoose");

const Project = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },  
    collaborators: {
        type: [String],
        default: []
    },  
    secrets: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Secret",
        default: [] 
    }
}, { timestamps: true });

module.exports = mongoose.model("Project", Project);
