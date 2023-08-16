const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        trim : true,
        maxlength: 32,
        unique: true
    }
}, {timestamps: true}) // whenever you make new entry to the schema
//it will record and strore exact time in to the database.


module.exports = mongoose.model("Category", categorySchema)