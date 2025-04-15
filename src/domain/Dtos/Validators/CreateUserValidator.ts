import { PersonalizeErrors } from "../../config/Errors/PersonalizeErrors";
import { EmailValidate } from "../../config/Services/EmailValidate";

export class CreateUserValidator{

    static validate(body:{[key:string]:any}):void{
        if(!body.name || body.length<=5){
            throw PersonalizeErrors.badRequest('Name is missing or too short');
        }
        if(!body.last_name){
            throw PersonalizeErrors.badRequest("Last name is missing");
        }
        if(!body.email || EmailValidate(body.email)){
            throw PersonalizeErrors.badRequest("Email is wrong");
        }
        if(!body.password || body.password.length<6){
            throw PersonalizeErrors.badRequest("Your Password is missing or is too short");
        }
        if(!body.rol_id || !isNaN(body.rol_id)){
            throw PersonalizeErrors.badRequest("Your Rol is Wrong");
        }

    }

    
}