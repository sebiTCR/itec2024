const mongoose = require('mongoose')
const { Schema, Model } = require("mongoose");
const endpointStatus = require("./endpointStatus");

const schema = new Schema({
    endpoint: String,
    reported: {
        type: Boolean,
        default: false
    },
    stats:{
        type: Array,
        default: []
    }
})

const model = new mongoose.model('EndpointStatus', schema)

module.exports = { model }