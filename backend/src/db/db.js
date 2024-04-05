const mongoose = require('mongoose')

// Models
const Endpoint = require('./models/endpoint').model
const EndpointStatus = require('./models/endpointStatus').schema

async function connect(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.debug("Connected to database!")
    } catch(e){
        console.error(e)
    }
    
}

connect()