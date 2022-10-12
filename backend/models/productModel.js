const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    
    productId: Number,
        quantity: Number,
        name: String,
        price: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);