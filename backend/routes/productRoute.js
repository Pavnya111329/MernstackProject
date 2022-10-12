const express = require("express")
const { getAllproduct, CreatProduct, updateProduct, deleteProduct, getSingleproduct } = require("../controller/productController")

const router = express.Router()


router.route("/product").get(getAllproduct)
router.route("/product/new").post(CreatProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getSingleproduct)
module.exports = router