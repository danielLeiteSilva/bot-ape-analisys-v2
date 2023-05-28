const app = require('express').Router()
const Apartament = require('./src/controller/Apartament')
const Health = require('./src/controller/Health')

app.get("/", Health.ok)
app.post('/register', Apartament.register)
app.get("/all", Apartament.all)

module.exports = app