const mongoose = require('mongoose')


const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,"Product needs a name"],
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type:Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: false,
        default:"https://via.placeholder.com/32x32",
    }
},
{
    timestamps: true
}

)


const Product = mongoose.model("Product",ProductSchema)

module.exports = Product;