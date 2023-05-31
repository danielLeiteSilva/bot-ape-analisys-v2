const app = require('express').Router()
const Apartament = require('./src/controller/Apartament')
const Health = require('./src/controller/Health')

app.get("/api/v1/", Health.ok)
app.post('/api/v1/apartaments/register', Apartament.registerApartaments)
app.get("/api/v1/apartaments/all", Apartament.allApartaments)

module.exports = app