const express = require('express') 
const router = express.Router()
const { response } = require('express') 

// fetch logs for project: readonly
router.get('/logs', (req, res) => {})

module.exports = router