const db = require('../db/db')

let placeholder = {
    status: [
        {
            time: Date.now(),
            status: 0
        },
        {
            time: Date.now(),
            status: 0
        },
        {
            time: Date.now(),
            status: 0
        }
    ]
}

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


module.exports = {sendConnection, registerLink}