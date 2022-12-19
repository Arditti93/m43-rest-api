const { Router } = require("express")
//import delete and update here
const {createUser, readUsers} = require("./userControllers")

const userRouter = Router()

userRouter.post("/createUser", createUser)
userRouter.get("/readUsers", readUsers)

//TODO: 2 more endpoints here 
//update .put 
//delete .delete

module.exports = userRouter