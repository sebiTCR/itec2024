const mongoose = require('mongoose')
const { Schema, Model } = require("mongoose");
const endpointStatus = require("./endpointStatus");

const schema = new Schema({
    endpoint: String,
    stats:{
        type: [ endpointStatus.schema ],
        default: []
    }
})

const model = new mongoose.model('EndpointStatus', schema)

module.exports = { model }