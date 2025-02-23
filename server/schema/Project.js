const Project = new Mongoose.schema({
    name: String, 
    createdBy: String, // id of creator
    collaborators: [String] // list of collaborator ids 
})