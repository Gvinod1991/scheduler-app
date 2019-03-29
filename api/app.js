//Import Dependencies
const express= require('express')

//App Initialisation 
let app=express();

//Create a server to lisyen om port 5000
app.listen(5000,function(){
    console.log('Server started on port 5000')
});