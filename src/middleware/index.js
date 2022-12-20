const bcrypt = require('bcrypt')
const User = require('../users/userModel')


exports.hashPass = async (req, res, next) => {
    try {
        // let plainTextPassword = req.body.password
        req.body.password = await bcrypt.hash(req.body.password, 10)
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send({error : error.message})
    }
}


exports.comparePass = async (req, res, next) => {
    try {
        req.user = await User.findOne({username: req.body.username})

        console.log("PLAIN TEXT PASSWORD")
        console.log(req.body.password)
        console.log("HASHED PASSWORD")
        console.log(req.user.password)

        if(req.user && await bcrypt.compare(req.body.password, req.user.password)) {
            console.log("username exists and plain text password matches hashed password")
            next()
        } else {
            throw new Error ("incorrect username or password")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error : error.message})
    }
}

