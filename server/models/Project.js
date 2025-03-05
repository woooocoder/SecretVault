const mongoose = require('mongoose')

const Project = new mongoose.schema({
    name: String, 
    createdBy: String, // id of creator
    collaborators: [String] // list of collaborator ids 
})

module.exports = mongoose.model('Project', Project)