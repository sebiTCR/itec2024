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
app.put('/api/endpoint', endpointCtrl.update)
app.delete('/api/endpoint/', endpointCtrl.remove)
app.post('/api/endpoint/report', endpointCtrl.report)
app.patch('/api/endpoint/report', endpointCtrl.fix)
app.get('/api/endpoints', endpointCtrl.getEntries)

sw.setup()

app.listen(8085, ()=>{
    console.log("Server started listening on 8085!")
})