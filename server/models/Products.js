const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        unique: true,
        default: function() {
            return 'P-' + Math.random().toString(36).substring(2, 9).toUpperCase();
        },
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
});

// MongoDB automatically generates the _id field as the primary key

module.exports = mongoose.model('Product', ProductSchema);
