const userModel = require('../Models/userModel')
//signup
module.exports.signup = async (req, res, next) => {
    const {userName, email, password, phone, address} = req.body
    try{
        const emailExist = await userModel.findOne({email})
        if(emailExist){
            console.log(email)
            return res.json({message:'Email already exists, please login', status:false})
        }
        const newUser = new userModel({
            userName: userName,
            email:email,
            phone:phone,
            password:password,
            address:address
        })
        const userDetails = await newUser.save()
        return res.json({
            message:'Account created successfully',
            status:true,
            // token
        });
    }
    catch(err){
        console.log(err)
        return res.json({
            message:'internal server error',
            status:false,
        })
    }
}
//login
module.exports.userLogin = async (req, res, next) => {
    const {email, password} = req.body
    const isUserExist = await userModel.findOne({email, password})
    try{
        if(isUserExist){
            return res.json({
                message:'Login success',
                email:email,
                status:true,
            })
        }
        else{
            return res.json({
                message:'Login failed user not found',
                status:false
            })
        }
    }
    catch(err){
        res.json({
            message:err,
            status:false
        })
    }
}