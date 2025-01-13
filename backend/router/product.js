import express from 'express';
import { addProduct, deleteProduct, getCateGoryProduct, getProduct, getSpecificProduct, updateProduct } from '../controller/product.js';
const router = express.Router();
import { validateProduct } from '../middleware/product.js';

router.route('/')
    .post(validateProduct, addProduct)
    .get(getProduct);

router.route('/:id')
    .get(getSpecificProduct)
    .delete(deleteProduct)
    .patch(updateProduct)

router.get('/cateSpecific/:id', getCateGoryProduct);




export default router