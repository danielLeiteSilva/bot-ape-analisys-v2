const express = require('express')
const app = express()
const cors = require('cors')
const Router = require('./routes')

const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(Router)

app.listen(port, async () => { console.log("Connected") })