
// LIBARYS FOR REST API 
//npm init -y 
//npm i mongoose 
//nmp i express
//npm i dotenv

//PASSWORD HASHING LIBARY
// npm i bcrypt 

//SEVER START COMMAND
//node src/server.js


require('./db/connection');

const express = require('express')
const userRouter = require('./users/userRoutes')

const app = express()
const port = process.env.PORT || 5001

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


