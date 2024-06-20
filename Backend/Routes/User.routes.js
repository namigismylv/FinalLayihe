const express = require("express")
const {usersController}=require('../Controllers/User.controller')
const router=express.Router()
router.post("/",usersController.register)
router.post("/",usersController.login)
module.exports = router