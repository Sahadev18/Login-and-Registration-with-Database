const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.render("index")
})

router.post('/',(req,res)=>{
    res.end("Welcome to the homepage")
})

router.get('/login',(req,res)=>{
    //res.writeHead(200,{'Content-Type':'text/html'})
    res.render("login")
})

router.post('/login',(req,res)=>{
    res.render("login")
})

router.get('/register',(req,res)=>{
    res.render("register")
})


module.exports = router