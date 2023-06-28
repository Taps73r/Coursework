const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    productProc: {
        type: String
    },
    productDisk: {
        type: String
    },
    productOp: {
        type: Number
    },
    productLan: {
        type: Number
        },
        productImage: {
            type:String
        },
    cloudinaryPublicId: {
        type:String
    }
});

const ProductModel = mongoose.model('ProductModel', productSchema)
module.exports = ProductModel