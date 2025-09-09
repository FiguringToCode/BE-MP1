const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    previousPrice: {
        type: Number,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },
})

const CategorySchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    products: [productSchema]
})

const Category = mongoose.model("Category", CategorySchema)

module.exports = Category