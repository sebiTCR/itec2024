const {db} = require('../db/db')

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

function sendConnection (req, res){
    //TODO: fetch website status
    res.send(placeholder)
}

function registerLink(req, res){
    //TODO: Register link in the DB
    let link = req.body.link;
    console.log(link)
    res.send({msg: "Link registered", link: link})
}


module.exports = {sendConnection, registerLink}