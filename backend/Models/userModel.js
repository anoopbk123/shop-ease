const d = new Date()
const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required:true,
    },
    email: {
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    dateCreated:{
        type:String,
        default:date//default is used to insert a field directly without getting data from user
    },
    blockStatus:{
        type:Boolean,
        default:false
    },
})

//here cannot use arrow function because this keyword will represent the class not the object
userSchema.pre("save", async function (next){
    if(this.isModified("password")){
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)
    }
    next()
})

const users = mongoose.model('users',userSchema)
module.exports = users