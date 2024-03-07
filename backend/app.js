require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const dbConnection = require('./Config/dbConnection')
const cors = require('cors')
const path = require('path')

//data base connection 
dbConnection.dbConnect()

//middle wares
app.use(express.json())
app.use(cors())

// app.get('/',(req, res) => {
//     res.json('welcome')
//     res.end()
// })

// app.get('/login',(req, res) => {
//     res.json('login')
    
// })

app.get('*', (req, res) =>{
    res.json('404')
})

app.listen(PORT,() => {
    console.log('server running at ', PORT)
})


