const axios = require('axios')
const db = require('../db/db')

var success_score = 0
var attempts = 0

const score = {
    healthy: 0,
    unstable: 2,
    down: 2
}


async function updateEndpointStatus(endpoint, status){
    await db.Endpoint.findOneAndUpdate({endpoint: endpoint},{ stats: status}) 
}

/**
 * Registers the status of the endpoint
 * @param {String} endpoint 
 */
async function registerStatus(endpoint){
    var stats = endpoint.stats

    await axios({
        method: 'get',
        url: endpoint,
    }).then((res)=>{
        if(res.status == 200 || res.status == 301){
            stats.push({
                date: Date.now(),
                status: score.healthy
            })
            updateEndpointStatus(endpoint.endpoint, stats)
        }
    }).catch((e)=>{
        console.log(e)
        stats.push({
            date: Date.now(),
            status: score.down
        })
        updateEndpointStatus(endpoint.endpoint, stats)

    })



    // db.Endpoint.updateOne({endpoint: endpoint.endpoint}, stats).then((res)=> console.log(res))
    console.log(stats)
}

async function update(){
    const endpoints = await db.Endpoint.find({})

    endpoints.map((endpoint)=>{
        setTimeout(() =>{
            registerStatus(endpoint)
        }, 5000)
        update()
    })
}


module.exports = {update}