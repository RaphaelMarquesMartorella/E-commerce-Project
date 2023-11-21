const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 50,
    },
    password: {
        type:String,
        required: [true, 'Please provide a password'],
        minlength: 6,
    },
})

module.exports = mongoose.model('Users', UserSchema)