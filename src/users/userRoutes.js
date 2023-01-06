const { Router } = require("express")
//import controllers and middleware so we can call them in our endpoints defined below
const {createUser, readUsers, updateUser, deleteUser, loginUser} = require("./userControllers")
const { hashPass, comparePass, tokenCheck } = require("../middleware")

const userRouter = Router()

//GET - On a GET method an endpoint should be returning static information or reading a database.
//POST - On a POST method, data should be sent in the http request to be used by the controller in some way (creating a database entry).
//PUT/PATCH - The PUT and PATCH methods handle update requests, for instance updating data in a database.
//DELETE - Fairly self-explanatory, data should be deleted on a DELETE method.

//dedfine our endpoints and set which http verb the endpoint is expecting when it recives at request
userRouter.post("/createUser",hashPass, createUser)

userRouter.post("/login", comparePass, loginUser)

//removed token check for the moment
userRouter.get("/readUsers",tokenCheck,readUsers) // protected endpoint
userRouter.get("/authCheck", tokenCheck, loginUser) // endpoint for persistant login
userRouter.put("/updateUser",hashPass, updateUser)
userRouter.delete("/deleteUser", deleteUser)


module.exports = userRouter