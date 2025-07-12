const mongoose=require('mongoose');

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true,
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        require:true,

    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:0,
    },
    num_sales:{
        type:Number,
        default:0
    }
})
const MenuItmes=mongoose.model('MenuItmes',menuSchema);
module.exports=MenuItmes;