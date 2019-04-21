//Import Dependencies
const express= require('express')

//App Initialization 
let app=express(); 

//Import User routes
let user=require('./routes/user.route')
app.use('/api/user',user)

//Create a server to listen om port 5000
const port= process.env.port || 5000
app.listen(port,function(){
    console.log(`Server started on port ${port}`)//Using Template literal
});