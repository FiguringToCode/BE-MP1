const mongoose = require('mongoose')

const SmartphoneSchema = new mongoose.Schema({
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

const Smartphone = mongoose.model("Smartphone", SmartphoneSchema)

module.exports = Smartphone