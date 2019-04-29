let mongoose=require('mongoose');
let Schema= mongoose.Schema; 

//Define Schema
let userSchema= new Schema({
    username:{type:String,required:true,index: true,unique:true,match:new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},
    password:{type:String,required:true},
    name:{type:String,required:true},
    mobile:{type:String},
    countryCode:{type:String},
    address:{type:Array,default:[]},
    created_at:{type:Date,default:new Date()},
    updated_at:{type:Date,default:new Date()}
});

//User Model
const User=mongoose.model('User',userSchema);

//Export the User model
module.exports=User;
