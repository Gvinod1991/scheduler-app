//Import Dependencies
const express= require('express')
const bodyParser=require('body-parser')
//Db connection import
let _db=require('./db');
//App Initialization 
let app=express(); 
app.use(bodyParser.json())

//Import User routes
let user=require('./routes/user.route')
app.use('/api/user',user)

//Create a server to listen om port 5000
const port= process.env.port || 5000
app.listen(port,function(){
    console.log(`Server started on port ${port}`)//Using Template literal
});