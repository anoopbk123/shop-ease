const express = require('express')
const router = new express.Router()
const cors = require('cors')
const {signup, userLogin, userProfile, editUserProfile} = require('../Controllers/userController')
const userAuth = require('../Middlewares/userAuth')

//  post methods
router.post("/signup", signup)
router.post("/login", userLogin)

//GET METHODS
router.get("/profile", userAuth, userProfile)

//PUT METHODS
router.put("/editprofile", userAuth, editUserProfile)

module.exports = router;