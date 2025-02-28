const express = require('express') 
const router = express.Router()
const { response } = require('express') 
// register a webhook for pipeline integration
router.post('/webhook', (req, res) => {})

// trigger a sync to pipelines
router.post('/sync', (req, res) => {})


module.exports = router