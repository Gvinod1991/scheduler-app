
//Test function 
exports.test=(req,res)=>{
res.send("Hello World!")
}

//New User Sign up
exports.newUser=(req,res)=>{
    const emailRegex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//Email
    let name= typeof(req.body.name) === 'string' &&  req.body.name.length > 0 ? req.body.name :false;
    let email_id=typeof(req.body.email_id) === 'string' && emailRegex.test(req.body.email_id) ? req.body.email_id : false;
    if(name && email_id){
        res.send({name,email_id})
    }else{
        res.status(400).send('Validation error')
    }
}