const express =require('express')
const router =express.Router()

//Import the User Controller
let userController=require('../controllers/user.controller')

//Define The Routes for the user
router.get('/get',userController.test)
router.post('/new',userController.newUser)

module.exports=router;