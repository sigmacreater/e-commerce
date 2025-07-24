import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        requird:true,
        unique:true
    },
    desc:String,
    images:Array,
    stock:Number,
    price:Number,
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categories",
        required:true
    }
},{timestamps:true})

const Product = mongoose.models.Products || mongoose.model("Products",productSchema)
export default Product