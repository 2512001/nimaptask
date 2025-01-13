import joi from 'joi';
import { productSchema } from './validation.js';

export const validateProduct = (req , res , next)=>{
    try{
       const {error} =  productSchema.validate(req.body)
       if(error){
        return res.json({
            message : error.message
       })
       }
       else{
        next();
       }
    }
    catch(err){
        console.log(err);
    }
}