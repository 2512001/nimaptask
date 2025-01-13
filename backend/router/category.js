import express from 'express';
import { addCategory, deleteCategory, getCategory, updateCategory } from '../controller/caregory.js';
const router = express.Router();


router.route('/')
.post(addCategory)
.get(getCategory);


router.route('/:id')
.patch(updateCategory)
.delete(deleteCategory);


export default router;