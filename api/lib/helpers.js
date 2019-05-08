/**
 * Helpers for the application
 */
const nodeMailer=require('nodemailer');
const config=require('../config');

//Trasporter object to send emails

let transporter = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:config.gmailAuth
});
//Verify the transporter
/*transporter.verify((err,success)=>{
    if(err){
        console.log(err)
    }else{
        console.log(success)
    }
})
*/
//Module exports
module.exports={transporter:transporter}