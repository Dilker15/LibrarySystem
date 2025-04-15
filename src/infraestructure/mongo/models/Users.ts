import mongoose, { Schema, SchemaTypes, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    last_name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required: true, 
    },
    password: {
        type: String,
        required: true,
    },
    cratead_on:{
        type:Date,
        default:new Date(),
    },
    state:{
        type:Boolean,
        require:true,
        default:true
    },
    updated_on:{
        type:Date,
        default:new Date(),
    },
    rol_id:{
        type:Schema.Types.ObjectId,
        ref:'Role',
        required:true,
    }
});

export const User = model("User", UserSchema);
