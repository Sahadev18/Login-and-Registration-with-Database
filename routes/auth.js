const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()


router.post('/',(req,res)=>{
    res.end("Welcome to the homepage")
})

router.post('/login', authController.register)

module.exports = router