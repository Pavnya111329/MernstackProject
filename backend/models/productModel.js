const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    
    productId: {
        type :Number ,
        required :[true,"please provide Product ID"]
    },
        quantity: {
            type :Number ,
            required :[true,"please provide Product quantity "]
        },
        name:  {
            type :String ,
            required :[true,"please provide Product name "]
        },
        price:  {
            type :Number ,
            required:[true,"please provide Product price "]
        }
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);