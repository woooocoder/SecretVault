require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5050
const uri = process.env.MONGODB_URI || ""
const auth = require('./api/auth')
const cicd = require('./api/cicd')
const logs = require('./api/logs')
const secrets = require('./api/secrets')

mongoose.connect(uri)
const db = mongoose.connection
db.on("error", (e) => {
  console.log(e)
})
db.once("connected", () => {
  console.log("DB connected")
})

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
