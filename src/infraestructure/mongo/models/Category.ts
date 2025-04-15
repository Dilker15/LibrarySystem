
import mongoose,{Schema,model} from "mongoose"


const categorySchema = new Schema({
    name:{
        type:String,
        required:true,
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
    }
});


export const Category = model('Category',categorySchema);

