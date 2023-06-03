const express = require('express')
const app = express()
const cors = require('cors')
const Router = require('./routes')
var bodyParser = require('body-parser')

const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(Router)

app.listen(port, async () => { console.log("Connected") })