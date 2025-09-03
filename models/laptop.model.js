const mongoose = require('mongoose')

const LaptopSchema = new mongoose.Schema({
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

},
{
    timestamps: true
})

const Laptops = mongoose.model("Laptops", LaptopSchema)

module.exports = Laptops