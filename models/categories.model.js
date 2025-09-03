const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
})

const Categories = mongoose.model("Categories", CategorySchema)

module.exports = Categories