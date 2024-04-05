const { Schema, default: mongoose } = require("mongoose");

const schema = Schema({
    date: Date,
    status: Number
})

module.exports = { schema }