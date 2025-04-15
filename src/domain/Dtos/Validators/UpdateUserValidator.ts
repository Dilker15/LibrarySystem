import { PersonalizeErrors } from "../../config/Errors/PersonalizeErrors";
import { EmailValidate } from "../../config/Services/EmailValidate";




export class UpdateUserValidator{

    static validate(data:{[key:string]:any}):void{
        if(!data.email || !EmailValidate(data.email)){
            throw PersonalizeErrors.badRequest("Email is missing or invalid");
        }
        if(!data.name){
            throw PersonalizeErrors.badRequest("Name is missing or invalid");
        }
        if(!data.last_name){
            throw PersonalizeErrors.badRequest("Last Name is missing or invalid");
        }
        if(!data.password || data.password.length<8){
            throw PersonalizeErrors.badRequest("Password must be 8 charts at least ");
        }
        if(!data.rol_id){
            throw PersonalizeErrors.badRequest("Rol is Required");
        }
    }
}