import mongoose from "mongoose";
const schema = mongoose.Schema;

const categorySchema = schema({
    name : {
        type : String,
        required :  true,
        unique : true       
    }
} , {timestamps : true});


const category = mongoose.model('category' , categorySchema);

export default category;