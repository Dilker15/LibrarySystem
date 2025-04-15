

import mongoose,{Schema,model} from "mongoose";

const detSchem = new Schema({
    loan_id:{
        type:Schema.Types.ObjectId,
        ref:'Loan',
        required:true,
    },
    book_id:{
        type:Schema.Types.ObjectId,
        ref:'Book',
        required:true
    },
    status:{
        type:Boolean,
        default:false,
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