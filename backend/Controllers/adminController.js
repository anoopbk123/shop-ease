const adminModel = require('../Models/adminModel').adminModel
const bcrypt = require('bcrypt')

module.exports.adminLogin = async (req, res) => {
    const {userName, password} = req.body
    try{
        const existingAdmin = await adminModel.findOne({userName})
        if(!existingAdmin){
            return res.json(
                {
                    status:false,
                    message: 'admin does not exist'
                }
            )
        }
        const passwordMatch = bcrypt.compare(password, existingAdmin.password)
        if(!passwordMatch){
            return res.json({
                status:false,
                message: 'wrong password'
            })
        }
        res.json({
            status:true,
            message:'login success'
        })
    }
    catch(err){
        console.log('admin login error',err)
        res.json({
            message:'login failed',
            status:false
        })
    }

    // const {userName, password} = req.body
    // try{
    //     const newAdmin = new adminModel({
    //         userName,
    //         password
    //     })
    //     const admin = await newAdmin.save()
    //     return res.json({
    //         message:'login success',
    //         status: true
    //     })
    // }
    // catch(err){
    //     console.log('admin login error',err)
    //     res.json({
    //         message:'login failed',
    //         status:false
    //     })
    // }
}