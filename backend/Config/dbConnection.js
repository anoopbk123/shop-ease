const mongoose = require('mongoose')
// require('dotenv').config()
// const dburl = process.env.DBCONNECTION
// console.log(dburl)

module.exports = {
    dbConnect: async () => {
        try{
            await mongoose.connect("mongodb://127.0.0.1:27017/shop_ease").then(() => {
                console.log("Database connected successfully")
            })
        }
        catch(error){
            console.log(error)
        }
    }
}