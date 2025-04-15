
import mongoose ,{Schema,model} from 'mongoose'


const studendSchems = new Schema({
    dni:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,  
    },
    cellphone:{
        type:String,
    },
    gender:{
        type:String,
        enum:['M','F'],
        required:true,
    },
    status:{
        type:Boolean,
        default:true
    },
    email_verified:{
        type:Boolean,
        default:false,
    },
    updatedAt:{
        type:Date,
        default:new Date()
    },
    createdAt:{
        type:Date,
        default:new Date(),
    }
});


export const Studend = model('Student',studendSchems);