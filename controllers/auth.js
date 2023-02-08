const base = require('../connection')
var alert = require('alert')

exports.register = (req,res) => {

    const{name,email,pass,cpass}=req.body

    if(pass === cpass)
    {
        console.log(req.body)
        res.send("Registered successfully")
    }
    else alert("Password does not match")
}