const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const endpointCtrl = require('./controllers/endpoint')
const bp = require('body-parser')
const sw = require ('./workers/service-updater')

app.use(cors())
app.use(bp.json())

app.get('/api/endpoint', endpointCtrl.sendConnection)
app.post('/api/endpoint', endpointCtrl.registerLink)
app.get('/api/endpoints', endpointCtrl.getEntries)

sw.update()

app.listen(8085, ()=>{
    console.log("Server started listening on 8085!")
})