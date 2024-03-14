require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const dbConnection = require('./Config/dbConnection')
const cors = require('cors')
const path = require('path')
const userRouters = require('./Routers/userRoutes')

//data base connection 
dbConnection.dbConnect()

//connection function
app.use(cors())

//middle wares
app.use(express.json())

app.use('/', userRouters);


// app.get('/:name/:age',(req, res) => {
//     const {name,age} = req.params
//     res.json({name, age})
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


