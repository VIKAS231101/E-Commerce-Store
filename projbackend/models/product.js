const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description:{
        type: String,
        trim: true,
        requored: true,
        maxlength: 2000
    },
    price:{
        type: Number,
        required: true,
        maxlength: 32,
        trim:true
    },
    // create a category with link with previous schema
    category:{
        type:ObjectId,
        ref: "Category",//where this object Id is coming from
        required: true
    },
    // how many units i have sold
    stock:{
        type: Number,
    },
    sold:{
        type: Number,
        default: 0
    },
    photo:{
        data: Buffer,
        contentType: String
    }// if firebase is used insted of storing in database,
    //it is stored in folder
}, {timestamps: true})


module.exports = mongoose.model("Product", productSchema);