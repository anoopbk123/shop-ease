const express = require('express')
const router = new express.Router()
const cors = require('cors')
const {signup, userLogin} = require('../Controllers/userController')

router.post("/signup", signup)
router.post("/user-login", userLogin)

module.exports = router;