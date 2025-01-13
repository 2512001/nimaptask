import mongoose from "mongoose";
const schema  = mongoose.Schema;

const productSchema = schema({
    productName : {
        type : String
    },
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Category',
        required : true
    },
    description : {
        type : String
    },
    price : {
        type :  Number
    }
} , { timestamps: true })

const product = mongoose.model('product' ,  productSchema);

export default product;