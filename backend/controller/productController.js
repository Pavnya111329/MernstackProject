const Product = require("../models/productModel")
const catchAsyncErrors = require("../middleware/catchAsyncError")

const ApiFeature = require("../utils/apiFeature");
const { query } = require("express");
//Create Product
exports.CreatProduct = catchAsyncErrors( async (req, res, next) => {
    let product = await Product.create(req.body);

    res.status(200).json({
        success: true,
        product,
        massage: "product added succesfully"
    })
})
//getProduct
exports.getAllproduct = catchAsyncErrors( async (req, res) => {
    let apiFeature = new ApiFeature(Product.find(),req.query).search()
    let product = await apiFeature.query;
//   let apifetacture = new ApiFeature(Product.find(),req.query).search()
//    let product = await apifetacture.quary
    res.status(200).json({
        success: true,
        product,
        massage: "product Get succesfully"
    })
})

//getSingleProduct
exports.getSingleproduct = catchAsyncErrors (async (req, res, next) => {
 
    let product = await Product.findById(req.params.id)

    if (!product) {
        res.status(500).json({
            success: false,
            statuscode : 404,
            massage: "product not found"
        })
    }
    res.status(200).json({
        success: true,
        product,
        massage: "Single product Get succesfully"
    })
})

//Update PRoduct
exports.updateProduct = catchAsyncErrors (async (req, res) => {
    let product = await Product.findById(req.params.id)

    if (!product) {
        res.status(500).json({
            success: false,
            statuscode : 404,
            massage: "product not found "
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModified: false
    })

    res.status(200).json({
        success: true,
        product,
        massage: "product Update succesfully"
    })
})
//Delete PRoduct
exports.deleteProduct = catchAsyncErrors (async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        res.status(500).json({
            success: false,
            statuscode : 404,
            massage: "product not found "
        })
    }
    product.remove(req.params.id)

    res.status(200).json({
        success: true,
        product,
        massage: "product delete succesfully"
    })
})