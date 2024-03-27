const express = require('express')
const adminRouter = new express.Router()
const {adminLogin} = require('../Controllers/adminController')

adminRouter.post('/login', adminLogin)

module.exports = adminRouter