import { Request,Response,NextFunction } from "express"
import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors";
import jwt from 'jsonwebtoken';


export function verifyToken(req:Request,res:Response,next:NextFunction){
    try{
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if(!token){
            throw PersonalizeErrors.badRequest("Token is required");
        }
        const key = process.env.TOKEN_KEY;
        if(!key){
            throw PersonalizeErrors.internalError("internal server Token");
        }
        const payload = jwt.verify(token,key) as {id:string}
        const {id} = payload;
        (req as any).user_id = id;
        next();
    }catch(error){
        console.log(error);
        const currentError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError(`Something was Wrong ${error}`);
        res.status(currentError.statusCode).json(currentError.message);
        return;
    }
}