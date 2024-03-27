const express = require('express')
const router = new express.Router()
const cors = require('cors')
const {signup, userLogin, userProfile} = require('../Controllers/userController')
const userAuth = require('../Middlewares/userAuth')

router.post("/signup", signup)
router.post("/login", userLogin)

router.get("/profile", userAuth, userProfile)

module.exports = router;