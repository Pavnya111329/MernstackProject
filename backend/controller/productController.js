const Product = require("../models/productModel")

//Create Product
exports.CreatProduct = async (req, res, next) => {
    let product = await Product.create(req.body);

    res.status(200).json({
        success: true,
        product,
        massage: "product added succesfully"
    })
}
//getProduct
exports.getAllproduct = async (req, res) => {
    let product = await Product.find()

    res.status(200).json({
        success: true,
        product,
        massage: "product Get succesfully"
    })
}

//getSingleProduct
exports.getSingleproduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)

    if (!product) {
        res.status(400).json({
            success: false,
            massage: "product not found "
        })
    }
    res.status(200).json({
        success: true,
        product,
        massage: "Single product Get succesfully"
    })
}

//Update PRoduct
exports.updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id)

    if (!product) {
        res.status(400).json({
            success: false,
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
}
//Delete PRoduct
exports.deleteProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        res.status(400).json({
            success: false,
            massage: "product not found "
        })
    }
    product.remove(req.params.id)

    res.status(200).json({
        success: true,
        product,
        massage: "product delete succesfully"
    })
}