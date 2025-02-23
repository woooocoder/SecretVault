const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/api/message', (req, res) => {
    const message = 'Hello Geek. This Message is From Server';
    res.json({ message });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

app.get('/api/login', (req, res) => {
    const email = req.body.email 
    const password = req.body.password

    res.json({ email: email, password: password})
})

app.post('/api/signup', (req, res) => {
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