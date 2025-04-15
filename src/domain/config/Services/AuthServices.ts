import jwt from 'jsonwebtoken';
import { PersonalizeErrors } from '../Errors/PersonalizeErrors';


export class AuthServices{

    generateToken(id:string):string{
        const seed = process.env.TOKEN_KEY;
        if(!seed){
            throw PersonalizeErrors.internalError("Internal Server JWT");
        }
        const token = jwt.sign({id}, seed, { expiresIn: '1h' });
        return token;
    }
}