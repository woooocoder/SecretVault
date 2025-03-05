const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 
const router = express.Router()
const { response } = require('express') 

const User = require('./../models/User')
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try { 
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: 'User not found'})

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials'})

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h'})
        res.json(token)
    } catch (e) {
        res.status(500).json({ message: 'Error logging in'})
    }
})

router.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body

    try { 
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' })
        }
 
        const hashedPassword = await bcrypt.hash(password, 10)
 
        const newUser = new User({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })

        await newUser.save()
 
        const { password: _, ...userWithoutPassword } = newUser.toObject()

        res.status(201).json(userWithoutPassword)
    } catch (e) {
        console.error(e)
        res.status(500).json({ message: 'Error registering user' })
    }
})

router.post('/logout', (req, res) => {})
router.post('/refresh', (req, res) => {})

module.exports = router