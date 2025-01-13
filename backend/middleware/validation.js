import Joi from 'joi';

export const productSchema = Joi.object({
  productName: Joi.string().max(50).required('please enter product name'),
  categoryName: Joi.string().max(30).required('enter category'),
  description: Joi.string().max(500).optional(),
  price: Joi.number().greater(0).required('price should be greater then 0'),
});


