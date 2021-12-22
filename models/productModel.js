import mongoose from 'mongoose';
const reviewSchema=mongoose.Schema({

    name:{type:String,required:true},
    rating:{type:Number,required:true},
    comment:{type:String,required:true}


})

const productSchema=mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        Reference:'User'
    },

    image:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    review:[reviewSchema],

    rating:{
        type:Number,
        required:true,
        default:0
    },
    numberReviews:{
        type:Number,
        default:0,
        required:true
    },

    price:{
        type:Number,
        required:true,
        default:0
    },

    countInStock:{
        type:Number,
        required:true,
        default:0
    }



    
},
{
    timeStamps:true
})

const Product=mongoose.model('Product',productSchema)

export default Product;