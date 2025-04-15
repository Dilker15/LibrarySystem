import { PersonalizeErrors } from "../../config/Errors/PersonalizeErrors";



export class LoginValidator{

    static validate(body:{[key:string]:any}){
        if(!body.email){
            throw PersonalizeErrors.badRequest("Emial is required");
        }
    }
}