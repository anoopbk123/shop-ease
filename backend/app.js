require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'localhost'
const dbConnection = require('./Config/dbConnection')
const cors = require('cors')
const path = require('path')
const userRouters = require('./Routers/userRoutes')
const adminRouters = require('./Routers/adminRouters')

//data base connection 
dbConnection.dbConnect()

//connection function
app.use(cors())

//middle wares
app.use(express.json())

app.use('/', userRouters);
app.use('/admin', adminRouters);


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

app.listen(PORT, HOSTNAME,() => {
    console.log('server running at ', `http://${HOSTNAME}:${PORT}`)
})


