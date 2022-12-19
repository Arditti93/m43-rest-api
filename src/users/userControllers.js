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
//TODO 2 controllers here one for update, one for delete