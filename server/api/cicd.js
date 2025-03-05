const express = require('express') 
const router = express.Router()
const { response } = require('express') 
const authMiddleware = require('./../middleware/authMiddleware')
// register a webhook for pipeline integration
router.post('/webhook', authMiddleware, (req, res) => {})

// trigger a sync to pipelines
router.post('/sync', authMiddleware, (req, res) => {})


module.exports = router