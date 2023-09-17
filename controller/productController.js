const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')
//------------------------------------------------
//**CONTROLLER START, controller is a method where CRUD operation are contains
//
//get(read) all product 
const getProducts = asyncHandler(async(req,res)=> {
    try{
       const products = await Product.find({});
       res.status(200).json(products)
    }catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})


//get(read) a product by id in mongodb
const getProductsById = asyncHandler(async(req,res)=> {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
       res.status(200).json(product)
    }catch(error) {
        res.status(500);
        throw new Error(error.message)
    }
})

//create a product in mongodb
const createProducts =asyncHandler(async(req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

//update a product by id in mongodb
const updateProductsById = asyncHandler(async(req,res)=> {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        //we cannot find the product to update
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`)
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

//delete a product by id in mongodb
const deleteProductsById =asyncHandler(async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        //we cannot find the product to update
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`)
        }
        
        res.status(200).json(product);

    } catch (error) {
            res.status(500);
            throw new Error(error.message)
    }
})

module.exports = {
    getProducts,
    getProductsById,
    createProducts,
    updateProductsById,
    deleteProductsById
}
//
//CONTROLLER END**
//------------------------------------------------