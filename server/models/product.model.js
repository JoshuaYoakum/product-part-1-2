const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "everything has a name"],
        minLength: [3, "title must be more than 3 characters long"]
    },
    price: {
        type: Number,
        minLength: [0, "price must be a positive number"]
    },
    description: {
        type: String,
        required: [true, "please enter a description"],
        minLength: [3, "your description is to short" ],
        maxLength: [200, "your description is to long" ]
    }
}, {timestamps : true})
module.exports.Product = mongoose.model('Product', ProductSchema)