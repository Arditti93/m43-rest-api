const { Router } = require("express")
//import delete and update here
const {createUser, readUsers, updateUser, deleteUser, loginUser} = require("./userControllers")
const { hashPass, comparePass } = require("../middleware")

const userRouter = Router()

//GET - On a GET method an endpoint should be returning static information or reading a database.
//POST - On a POST method, data should be sent in the http request to be used by the controller in some way (creating a database entry).
//PUT/PATCH - The PUT and PATCH methods handle update requests, for instance updating data in a database.
//DELETE - Fairly self-explanatory, data should be deleted on a DELETE method.


userRouter.post("/createUser",hashPass, createUser)
userRouter.post("/login", comparePass, loginUser)
userRouter.get("/readUsers", readUsers)
userRouter.put("/updateUser", updateUser)
userRouter.delete("/deleteUser", deleteUser)

//TODO: 2 more endpoints here 
//update .put 
//delete .delete

module.exports = userRouter