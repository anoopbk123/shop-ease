const userModel = require("../Models/userModel")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const maxAge = 60*60*24*3
require('dotenv').config()

//jwt creation
const createToken = id => {
  return jwt.sign({id}, process.env.JWT_KEY,{
    expiresIn: maxAge
  })
}

//signup
module.exports.signup = async (req, res, next) => {
  const { userName, email, password, phone, address } = req.body;
  try {
    const emailExist = await userModel.findOne({ email });
    if (emailExist) {
      // console.log(email);
      return res.json({
        message: "Email already exists, please login",
        status: false,
      });
    }
    const newUser = new userModel({
      userName,
      email,
      phone,
      password,
      address,
    });
    const userDetails = await newUser.save();
    return res.json({
      message: "Account created successfully",
      status: true,
      // token
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "internal server error",
      status: false,
    });
  }
};
//login
module.exports.userLogin = async (req, res, next) => {
  const { email, password: loginPassword } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      if(user.blockStatus){
        return res.json({
          status:false,
          message:'you are temporally blocked by admin'
        })
      }
      else{
        const passwordMatch = await bcrypt.compare(loginPassword, user.password);
      if (passwordMatch) {
        const token = createToken(user._id)
        return res.json({
          message: "Login success",
          user,
					token,
          status: true,
        });
      }
			else{
				return res.json({
					message:'password is not matching',
					status:false,
				})
			}
      }
    } else {
      return res.json({
        message: "Login failed user not found",
        status: false,
      });
    }
  } catch (err) {
    res.json({
      message: err,
      status: false,
    });
  }
};

// user profile
module.exports.userProfile = async (req, res)=>{
  try{
    const user = req.user
    const {_id, email, phone, address, userName:name} = user && user
    res.json({
      user:{_id, email, phone, address, name},
      status:true
    })
  }
  catch(err){
    res.json({
        message:err,
        status:false
    })
}
}
