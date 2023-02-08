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
    /*base.db.query("CREATE DATABASE validation", (err)=>{
        if(err) throw err
        console.log("Database created")
    })
    base.db.query("CREATE TABLE login (name varchar(50), email varchar(100), password varchar(100))", (err)=>{
        if(err) throw err
        console.log("Table created")
    })
    base.db.query("DROP TABLE login", (err)=>{
        if(err) throw err
        console.log("Table created")
    })
    base.db.query("DROP DATABASE validation", (err)=>{
        if(err) throw err
        console.log("Database dropped")
    })
    base.db.query("ALTER TABLE login RENAME users", (err)=>{
        if(err) throw err
        console.log("Table name chaged")
    })*/
})

//define router
app.use('/',require('./routes/pages'))
app.use('/auth',require('./routes/auth'))

app.listen(5000,(err) => {
    if(err) throw err
    console.log("Server running on port 5000")
})