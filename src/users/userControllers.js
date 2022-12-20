const User = require('./userModel') 

exports.createUser = async (req, res) => { 
    console.log(req.body)
    try {
        const newUser = await User.create(req.body)
        console.log(newUser)
        res.status(201).send({message: "A user has been successfully created"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.readUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({users: users})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}
exports.updateUser = async (req, res) => {
    try {
        await User.updateOne(
            //find the user we want to update buy filtering the database by username
            {username: req.body.username},
            //then update there password from a value passed in the body of the request
            {[req.body.key]: req.body.value}
        )
        res.status(200).send({message: "A user felid as been updated"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({username: req.body.username})
        res.status(200).send({message: "A user successfully deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.loginUser = async (req, res) => {
    console.log("middleware passed and controller has been called")
    try {
        const user = await User.findOne({username: req.body.username})
        res.status(200).send({username: user.username })
    } catch (error) {
        console.log(error)
        console.log("username not found")
        res.status(500).send({error: error.message})
    }
}





//TODO 2 controllers here one for update, one for delete