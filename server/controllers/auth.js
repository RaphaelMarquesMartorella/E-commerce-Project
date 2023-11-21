const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const register = async (req,res) => {
    const { name, password } = req.body
    const user = await User.findOne({name})
    if(user) {
        return res.status(400).json({message: 'Already exists an account with this name'})
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({name, password: hashedPassword})
    res.json({name})
    
    
}

const login = async (req,res) => {
    const { name, password } = req.body
    const user = await User.findOne({name})
    if(!user) {
        return res.status(400).json({message: 'Please provide a valid name and password.'})
    }

const isPasswordValid = await bcrypt.compare(password, user.password)

if (!isPasswordValid){
    return res.json({message: 'Please provide a valid name and password.'})
}

    const token = jwt.sign({ id: user._id}, 'secret')
    res.json({token, userID: user._id})

}

module.exports = {
    register,
    login,
}

