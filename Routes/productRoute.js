
const express = require('express')

//import model product,model contain metadata for table in database
const Product = require('../models/productModel')

//import variable from controller
const {
    
    getProducts,
    getProductsById,
    createProducts,
    updateProductsById,
    deleteProductsById

} = require('../controller/productController')

//------------------------------------------------
//**ROUTE START, route are where the it handle HTTP request
//
//declare router variable
const router = express.Router();

//get data dari HTTP request
router.get('/',getProducts);

//get data dari HTTP request by id
router.get('/:id',getProductsById)

//(create)nak hantar data ke HTTP request
router.post('/',createProducts )

//update a productt in HTTP request by ID
router.put('/:id', updateProductsById)

//delete a product in HTTP request
router.delete('/:id',deleteProductsById)
//
////ROUTE END**
//------------------------------------------------


//enable to fetch from server.js
module.exports = router;