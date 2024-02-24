require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 4000
const dbConnection = require('./Config/dbConnection')
const cors = require('cors')
const path = require('path')

//data base connection 
dbConnection.dbConnect()


app.use(express.json())

app.get('/',(req, res) => {
    res.json('welcome')
    res.end()
})

app.get('*', (req, res) =>{
    res.json('404')
})

app.listen(PORT,() => {
    console.log('server running at ', PORT)
})