const User=require('../models/user.model');
let bcrypt = require('bcrypt');//TO Hash the password
let jwt = require('jsonwebtoken');
let config= require('../config');
//New User Sign up
exports.newUser=(req,res)=>{
    let password=Math.random().toString(36).slice(-8);
    let hashedPassword=bcrypt.hashSync(password, 10);//Generate random password and hash it using bcrypt
    //New User Model
    let userModel=new User({
        name:req.body.name,
        username:req.body.username,
        password:hashedPassword
    })
    //Save the User's data
    userModel.save((err)=>{
        FIXME:
        /**
         * Send the password to user's email after successful save
         * Remove password from response
         */
        if(!err){
            res.send({"status":1,message:"Registration successful",password:password})
        }
        else{
            res.status(200);
            res.send({"status":0,message:"Validation error!","error":err})
        }
    })
}

//User Login
exports.login = function(req,res){
    const emailRegex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//Email
    let username=typeof(req.body.username)==='string' && emailRegex.test(req.body.username) ? req.body.username : false;
    let password=typeof(req.body.password)==='string' && req.body.password.length >=8 ? req.body.password :false;
    if(username && password){
        console.log(username,password)
        User.findOne({username: username}).then((result)=>{
            if(result!==null){
                if(bcrypt.compareSync(password, result.password)){
                    let token = jwt.sign({
                            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),//24 hours expired
                            sub: username
                        }, config.secret);
                    res.status(200);
                    res.json({"status":1,message:"Authentication Successful",token:token});
                }else{
                    res.status(200);
                    res.json({"status":0,message:"Invalid credentials",error: {password:"Password should be valid!"}});
                }
            }
            else{
                res.status(200);
                let errObject=username ? []:[{username:"Username is required and should be valid!"}];
                password ? errObject.push({password:"Password required and should be valid!"}) : [];
                res.json({"status":0,message:"Invalid credentials",error: errObject});
            }
        });
    }else{
        res.status(200);
        let errObject=username ? []:[{username:"Username is required and should be valid!"}];
        !password ? errObject.push({password:"Password required and should be valid and of length 8 chars!"}) : [];
        res.json({"status":0,message:"Validation error!",error: errObject});
    }
}