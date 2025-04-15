import { Response,Request } from "express"
import { LoginDto } from "../../domain/Dtos/Auth/LoginDto"
import { LoginValidator } from "../../domain/Dtos/Validators/LoginValidator";
import { LoginUseCase } from "../../domain/usescases/Users/LoginUseCase";
import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors";


export class AuthController{

    constructor(private readonly loginUse:LoginUseCase){

    }


    login = async (req:Request,res:Response)=>{
        try{
            LoginValidator.validate(req.body);
            const data = LoginDto.generate(req.body);
            const dataResponse = await this.loginUse.execute(data);
            res.status(200).json(dataResponse);
        }catch(error){
            console.log(error);
            const currentError = error instanceof PersonalizeErrors ? error:PersonalizeErrors.internalError("Something was Wrong");
            res.status(currentError.statusCode).json(currentError.message);
        }
    }
}