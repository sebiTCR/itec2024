const db = require('../db/db')

async function sendConnection (req, res){
    let link = req.body.link;
    let result = await db.Endpoint.findOne({endpoint: link})
    if (result == ''){
        res.send({msg: "Endpoint not found!"})
    }
    res.send(result)
}

async function registerLink(req, res){
    let link = req.body.link;
    if(await db.Endpoint.findOne({endpoint: link})){
        res.send({msg: "Endpoint already exists!"})
        return;
    }
    console.log("Creating entry...")
    await db.Endpoint.create({
        endpoint: link
    })
    res.send({msg: "Link registered", link: link})
}

async function getEntries(req, res){
    let results = await db.Endpoint.find({})
    res.send(results)
}


module.exports = {sendConnection, registerLink, getEntries}