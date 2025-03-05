const mongoose = require('mongoose')

const Secret = new mongoose.Schema({
    key: String,
    value: String,
    projectId: String,
    version: String,
    useCase: String, // dev, beta, prod, test
    killTime: String // NA, 1d, 1w, 1h, ...
})

module.exports = mongoose.model('Secret', Secret)