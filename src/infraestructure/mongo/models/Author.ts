

import mongoose,{Schema,model} from "mongoose";


const authorSchem = new Schema({
    name:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
    },
    gender:{
        type:String,
        enum:['M','F'],
        require:true,
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


export const Author = model('Author',authorSchem);