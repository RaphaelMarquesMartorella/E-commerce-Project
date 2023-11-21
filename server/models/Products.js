const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema ({
    videoGames: {
        type: Array,
        required: true,

    },
    productId: {
        type: String,
        
    },
    imgPath: {
        type: String,
        required: [true, "Please provide an image path."]
    },
    title: {
        type: String,
        required: [true, "Please provide a title."]
    },
    price: {
        type: String,
        required: [true, "Please provide a price."]
    },
    color: {
        type: String,
        
    },
    description: {
        type: String,
        required: [true, "Please provide an image description."]
    },
    
})

module.exports = mongoose.model('Job', ProductSchema)