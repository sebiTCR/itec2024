const db = require('../db/db')
const nodemailer = require('nodemailer')

let transporter = null
nodemailer.createTestAccount((err, account) => {
    transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass  // generated ethereal password
        }
    })
})

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


async function remove(req, res){
    const endpoint = req.body.endpoint
    // let results = await db.Endpoint.find({endpoint: endpoint})
    // if(!results)
    //     res.send({msg: "No entry found"})
    //     return
    await db.Endpoint.findOneAndDelete({endpoint: endpoint})
    res.send({msg: `Removed ${endpoint}`})
}

async function update(req, res){
    const endpoint = req.body.endpoint
    const newEndpoint = req.body.new_endpoint
    if(newEndpoint == " "){
        res.send({msg: "The new endpoint cannot be empty!"})
        return
    }

    await db.Endpoint.findOneAndUpdate({endpoint: endpoint}, {endpoint: newEndpoint})
    res.send({msg: `Updated ${endpoint} to ${newEndpoint}`})
}


async function report(req, res){
    //TODO: Implement mail sender
    const endpoint = req.body.endpoint
    transporter.sendMail({
        from: process.env.MAIL_EMAIL,
        to: process.env.MAIL_EMAIL,
        subject: `'${endpoint}' has been reported by an user!`,
        text:`Your endpoint ('${endpoint}') has been reported by users! Fix it up!`
    })
    await db.Endpoint.findOneAndUpdate({endpoint: endpoint}, {reported: true})
    
    res.send({msg: `Reported ${endpoint}`})

    

}

async function fix(req, res){
    //TODO: Implement credential check
    const endpoint = req.body.endpoint
    await db.Endpoint.findOneAndUpdate({endpoint: endpoint}, {reported: true})
    res.send({msg: `Fixed ${endpoint}`})
}


module.exports = {sendConnection, registerLink, getEntries, remove, update, report, fix}