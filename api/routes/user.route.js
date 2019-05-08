const express =require('express')
const router =express.Router()

//Import the User Controller
let userController=require('../controllers/user.controller')

//Define The Routes for the user
router.post('/new',userController.newUser)
router.post('/login',userController.login)
//router.get('/verify',helpers.verify)
//Export the router
module.exports=router;