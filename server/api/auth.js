app.post('/login', (req, res) => {
    const email = req.body.email 
    const password = req.body.password

    res.json({ email: email, password: password})
})

app.post('/signup', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName 
    const email = req.body.email 
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    res.json({
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    })
})

app.post('/logout', (req, res) => {})
app.post('/refresh', (req, res) => {})