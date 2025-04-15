
import mongoose,{Schema,model} from "mongoose";


const bookSchem = new Schema({
    isbn:{
        type:String,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    status:{
        type:Boolean,
        default:true,
    },
    created_on:{
        type:Date,
        default:new Date(),
    },
    updated_on:{
        type:Date,
        default:new Date(),
    },
    category_id:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    }

});


export const Book = model('Book',bookSchem);