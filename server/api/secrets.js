const express = require('express') 
const router = express.Router()
const { response } = require('express') 

// get all secrets for a project
router.get('/', (req, res) => {}) 

// create new secret
router.post('/:id', (req, res) => {})

// update secret @ id
router.put('/:id', (req, res) => {})

// delete secret @ id
router.delete('/:id', (req, res) => {})

module.exports = router