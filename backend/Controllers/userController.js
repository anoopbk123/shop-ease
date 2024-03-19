const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
//signup
module.exports.signup = async (req, res, next) => {
  const { userName, email, password, phone, address } = req.body;
  try {
    const emailExist = await userModel.findOne({ email });
    if (emailExist) {
      console.log(email);
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
      const passwordMatch = await bcrypt.compare(loginPassword, user.password);
      if (passwordMatch) {
        return res.json({
          message: "Login success",
          user,
					// token,
          status: true,
        });
      }
			else{
				return res.json({
					message:'password is not matching',
					status:false,
				})
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
