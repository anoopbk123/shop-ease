require('dotenv').config()
const jwt = require('jsonwebtoken');
const userModel = require('../Models/userModel')

module.exports = async (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;
        const authToken = authHeader && authHeader.split(' ')[1]
        if(!authToken){
            return res.json({
                message:'No token',
                status:false,
                loginFailed:true
            })
        }
        const decoded = jwt.verify(authToken, process.env.JWT_KEY)
        const user = await userModel.findOne({_id: decoded.id})
        if(!user){
            return res.json({
                message:'un authorized',
                status:false,
                loginFailed:true
            })
        }
        if(user.blockStatus){
            return res.json({
                message:'your account is temporally blocked by admin',
                status:false,
                loginFailed:true
            })
        }
        req.user = user
        next()
    }
    catch(err){
        res.json({
            message:err,
            status:false
        })
    }
}