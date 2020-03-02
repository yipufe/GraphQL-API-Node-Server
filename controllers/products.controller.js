import { join } from 'path'

import Product from '../models/product.model'
import Bundle from '../models/bundle.model'

//Adds product bundle to database
//To be used with POST request
//Send in the body bundle, price, description, and imageUrl
export const postAddBundle = (req, res, next)=>{
    const bundle = new Bundle({
        bundle: req.body.bundle,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl})
    bundle.save()
        .then(result => {
            console.log('Created Bundle')
            res.status(201).json({message: 'Created Bundle! Check your DB'})
        })
        .catch(err => {
            res.send(err)
        })
}

//Add product through POST method
export const postAddProduct = (req, res, next)=>{
    const product = new Product({
        bottleType: req.body.bottleType,
        itemCode: req.body.itemCode,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl})
    product.save()
        .then(result => {
            console.log('Created Product')
            res.status(201).json({message: 'Created Product! Check your DB'})
        })
        .catch(err => {
            res.send(err)
        })
    }

//GET a product by ID passed in the url
export const getProduct = (req, res, next) => {
    const prodId = req.params.prodId
    Product.findById(prodId)
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            console.log(err)
        })
}

//GET a bundle by ID passed in the url
export const getBundle = (req, res, next) => {
    const bundleId = req.params.bundleId
    Bundle.findById(bundleId)
        .then(bundle => {
            res.json(bundle)
        })
        .catch(err => {
            console.log(err)
        })
}

//Modify product targeted by id passed in through url parameter
export const putUpdateProduct = (req, res, next) => {
    const prodId = req.params.prodId
    console.log("PUT:",prodId)
    Product.findById(prodId)
        .then(product => {
            product.bottleType = req.body.bottleType
            product.itemCode = req.body.itemCode
            product.price = req.body.price
            product.description = req.body.description
            product.imageUrl = req.body.imageUrl
            return product.save()
        })
        .then(result => {
            console.log("Update Product")
            res.status(201).json({message: 'Updated Product! Check your DB'})
        })
    

}

//Delete product based on id passed in through url
export const deleteProduct = (req, res, next) => {
    const prodId = req.params.prodId
    console.log(prodId)

    Product.findByIdAndRemove(prodId)
        .then(() => {
            console.log('Product Deleted')
            res.status(201).json({message: 'Deleted Product! Check your DB'})
        })
        .catch(err => {
            console.log(err)
        })
}

//Get all product bundles
export const getBundles = (req, res, next)=>{
    Bundle.find()
        .then(bundles => {
            res.json(bundles)
        })
        .catch(err => {
            console.log(err)
        })
}

//Get all products
export const getProducts = (req, res, next)=>{
    Product.find()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(err)
        })
    

}

//Provide landing page
export const getMain = (req, res, next)=>{
    res.sendFile(join(__dirname, '../', 'views', 'index.html'))
}