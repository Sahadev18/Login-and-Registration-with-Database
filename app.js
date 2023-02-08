const express = require('express')
const path = require('path')
const app = express()
const base = require('./connection')


publicDirectory = path.join(__dirname,'./public')
app.use(express.static(publicDirectory))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.set('view engine', 'hbs')


base.db.connect((err)=>{
    if(err) throw err
    console.log("Connected to the server!")
    /*db.query("CREATE DATABASE validation", (err)=>{
        if(err) throw err
        console.log("Database created")
    })
    db.query("CREATE TABLE login (name varchar(20), age int, email varchar(20))", (err)=>{
        if(err) throw err
        console.log("Table created")
    })
    db.query("DROP TABLE login", (err)=>{
        if(err) throw err
        console.log("Table created")
    })
    db.query("DROP DATABASE validation", (err)=>{
        if(err) throw err
        console.log("Database dropped")
    })*/
})

//define router
app.use('/',require('./routes/pages'))
app.use('/auth',require('./routes/auth'))

app.listen(5000,(err) => {
    if(err) throw err
    console.log("Server running on port 5000")
})