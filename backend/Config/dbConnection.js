const mongoose = require('mongoose')
require('dotenv').config()
const DBURL = process.env.DBCONNECTION
// console.log(dburl)

module.exports = {
    dbConnect: async () => {
        try{
            await mongoose.connect(DBURL).then(() => {
                console.log("Database connected successfully")
            })
        }
        catch(error){
            console.log(error)
        }
    }
}