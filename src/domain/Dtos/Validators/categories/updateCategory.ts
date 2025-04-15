import { PersonalizeErrors } from "../../../config/Errors/PersonalizeErrors";



export class UpdateCategoryValidator{

    static validate(body:{[key:string]:any}):void{
        if(!body.name || body.name.length<=3){
            throw PersonalizeErrors.badRequest("Name is missing or too short");
        }
        if(!body.state){
            throw PersonalizeErrors.badRequest("Status for category is Wrong");
        }
    }
}