import mongoose,{Schema,model} from "mongoose";


const rolSchema = new Schema({
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
        default:new Date()
    },
    updated_on:{
        type:Date,
        default:new Date(),
    }

});



export const Role = model('Role',rolSchema);