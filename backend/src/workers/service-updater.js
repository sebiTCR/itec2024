const axios = require('axios')
const db = require('../db/db')
const http = require('http')

var intrHandle

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
        if(rcode === 200 || rcode === 301){
            stats.push({
                date: currentDate,
                status: score.healthy
            })
        } else {
            stats.push({
                date: currentDate,
                status: score.down
            })
        }

        clearInterval(intrHandle)

        updateEndpointStatus(endpoint._id, stats)
    })
}


async function update(){
    const endpoints = await db.Endpoint.find({})

    endpoints.map((endpoint)=>{
    intrHandle = setTimeout(() =>{
        registerStatus(endpoint)
    }, 5000)
    })
}


async function refresh_content(endpoints){
    endpoints = await db.Endpoint.find({})
}

async function setup(){
    var endpoints = []
    refresh_content(endpoints)

    endpoints.map((endpoint)=>{
    intrHandle = setInterval(() =>{
        refresh_content(endpoints)
        registerStatus(endpoint)
    }, 5000)
    })
}


module.exports = {update, setup}