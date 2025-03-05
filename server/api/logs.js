const express = require('express') 
const router = express.Router()
const { response } = require('express') 
const authMiddleware = require('./../middleware/authMiddleware')

// fetch logs for project: readonly
router.get('/logs', authMiddleware, (req, res) => {})

module.exports = router