const express = require('express')
// const User = require('../schemas/User')
const bcrypt = require('bcrypt') 
const router = express.Router()
const { response } = require('express') 

router.post('/login', (req, res) => {
    const email = req.body.email 
    const password = req.body.password

    res.json({ email: email, password: password})
})

router.post('/signup', (req, res) => {
    const { email, password, firstName, lastName } = req.body

    res.json({
        firstName,
        lastName,
        email,
        password
    })
})

router.post('/logout', (req, res) => {})
router.post('/refresh', (req, res) => {})

module.exports = router