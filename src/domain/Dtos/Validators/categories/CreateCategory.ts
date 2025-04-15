import { PersonalizeErrors } from "../../../config/Errors/PersonalizeErrors";


export class CreateCategoryValidator{


    static validate(body:{[key:string]:any}){
        if(!body.name || body.name.length<=3){
            throw PersonalizeErrors.badRequest("Category name is missing or too short");
        }
    }
}