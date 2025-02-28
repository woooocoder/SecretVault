require("dotenv").config();
const cors = require("cors");
const express = require("express");
// const mongoose = require("mongoose");
const port = 5000;

const auth = require('./api/auth')
const cicd = require('./api/cicd')
const logs = require('./api/logs')
const secrets = require('./api/secrets')

// mongoose.connect(
//     process.env.MONGODB_URI,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// )
// const db = mongoose.connection
// db.on("error", (e) => {
//   console.log(e)
// })
// db.once("connected", () => {
//   console.log("DB connected")
// })

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/auth', auth)
app.use('/api/cicd', cicd)
app.use('/api/logs', logs)
app.use('/api/secrets', secrets) 

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})
