import mongoose,{Schema,model} from 'mongoose'


const loanSche = new Schema({
    description:{
        type:String,
        required:true,
    },
    return_date:{
        type:Date,
        required:true,
    },
    status:{
        type:Boolean,
        default:false,
    },
    student_id:{
        type:Schema.Types.ObjectId,
        ref:'Student',
        required:true,
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
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

export const Loan = model('Loan',loanSche);