import productModel from '../model/product.js';
import categoryModel from '../model/category.js';

export const getProduct = async (req, res) => {
    try {
        let {page} = req.query;
        if(!page){
            return;
        }
        const limit = 10;
        const skippage = (page-1) * limit;
        let result = await productModel.find().skip(skippage).limit(10).sort({createdAt : -1});
        res.status(200).json({
            result
        })
    }
    catch (err) {
        console.log(err);

        res.status(400).json({
            message : err.messaage
        })
    }

}


export const getSpecificProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let result = await productModel.findById(id);

        res.status(201).json({
            result
        });
    }
    catch (err) {
        console.log(err);

        res.status(400).json({
            message : err.messaage
        })
    }

}


export const getCateGoryProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let result = await productModel.find({ categoryId: id });
        if (!result) {
            return res.status(201).json({
                message: 'this category does not exits',
                result,
                success: false
            });
        }
        return res.status(201).json({
            result
        });
    }
    catch (err) {
        console.log(err);

        res.status(400).json({
            message : err.messaage
        })
    }

}

export const addProduct = async (req, res) => {
    try {
        let { productName, categoryName, description , price } = req.body;
        let cate = await categoryModel.findById(categoryName);
        if (!cate) {
            return res.json({
                message: `${categoryName} does not exits in our website`,
                sucess: false,
            });
        }

        let newproduct = new productModel({
            productName,
            categoryId: cate._id,
            description,
            price
        });

        let result = await newproduct.save();
        res.status(201).json({
            message: 'product has been created',
            sucess: true,
            result
        });
    }
    catch (err) {
        console.log(err);

        res.status(400).json({
            message : err.messaage
        })
    }

}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let result = await productModel.findByIdAndDelete(id);
        if (!result) {
            return res.status(301).json({
                message: `this product does not exits in our database`,
                success: true,
            })
        }
        res.status(200).json({
            message: `${result.productName} product has been deleted succefully`,
            success: true,
            result
        })
    }
    catch (err) {
        console.log(err);

        res.status(400).json({
            message : err.messaage
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let result = await productModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!result) {
            return res.status(301).json({
                message: `you can not update this product`,
                success: false,
            })
        }

        res.status(201).json({
            message: `your product has been updated`,
            success: true,
            result
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            message : err.messaage
        })
    }

}