
import mongoose,{Schema,model} from "mongoose";


const auBoSche = new Schema({
    book_id:{
        type:Schema.Types.ObjectId,
        ref:'Book',
        required:true,
    },
    author_id:{
        type:Schema.Types.ObjectId,
        ref:'Author',
        required:true,
    },
    status:{
        type:Boolean,
        default:true,
    },
});

export const AuthorBook = model('AuthorBook',auBoSche);