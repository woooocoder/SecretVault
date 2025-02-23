require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 5000;

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(express.static('public'));

app.get('/api/message', (req, res) => {
    const message = 'Hello Geek. This Message is From Server';
    res.json({ message });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
