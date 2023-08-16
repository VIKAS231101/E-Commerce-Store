const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

// Sometimes we can use multple schemas in the single file
//but is not a good practise
const productCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number

})

const ProductCart = mongoose.model("ProductCart", productCartSchema);


const OrderSchema = new mongoose.Schema({
    products: [productCartSchema], // these are the products in the cart
    transaction_id: {},
    amount:{type: Number},
    address: String,
    status:{
        type: String,
        default: "",
        enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Received"]
    },
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
}, {timestamps: true}
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = {Order, ProductCart};