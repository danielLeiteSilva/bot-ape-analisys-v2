const app = require('express').Router()
const Register = require('./src/controller/Register')
const Health = require('./src/controller/Health')

app.get("/", Health.ok)

app.post('/register', Register.salve)

module.exports = app