const axios = require('axios')
const db = require('../db/db')
const http = require('http')

var intrHandle
var endpoints = []

const score = {
    healthy: 0,
    unstable: 2,
    down: 2
}


async function updateEndpointStatus(id, status){
    await db.Endpoint.findOneAndUpdate(id, { stats: status}, {new: true})
}


function getAproxDate(){
    let date = new Date()
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date
}


/**
 * Registers the status of the endpoint
 * @param {String} endpoint 
 */
async function registerStatus(endpoint){
    var stats = endpoint.stats
    const url = `http://localhost:8085${endpoint.endpoint}`
    var currentDate = getAproxDate()

    http.get(url, (res)=>{
        res.on('error', (e)=>{
            console.error(e)
        })

        let rcode = res.statusCode
        let conStatus = score.healthy
        if(rcode == 200 || rcode == 301){
            conStatus = score.healthy
        } else {
            conStatus = score.unstable
        }

        stats.push({
            date: currentDate,
            status: conStatus
        })

        clearInterval(intrHandle)

        updateEndpointStatus(endpoint._id, stats)
    })
}



async function refresh_content(){
    endpoints = await db.Endpoint.find({})
}


async function setup(){
    endpoints = await db.Endpoint.find({})

    endpoints.map((endpoint)=>{
        intrHandle = setInterval(() =>{
            refresh_content()
            registerStatus(endpoint)
        }, 1000)
    })
}


module.exports = {setup}