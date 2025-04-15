
import { PersonalizeErrors } from "../../../config/Errors/PersonalizeErrors";
import { EmailValidate } from "../../../config/Services/EmailValidate";

export class UpdateStudentValidator {
    
    static validate(body: { [key: string]: any }) {
    
        if (!body.dni || typeof body.dni !== 'string' || body.dni.trim() === '') {
            throw PersonalizeErrors.badRequest("Dni is required and should be a non-empty string");
        }

      
        if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
            throw PersonalizeErrors.badRequest("Name is required and should be a non-empty string");
        }

   
        if (!body.last_name || typeof body.last_name !== 'string' || body.last_name.trim() === '') {
            throw PersonalizeErrors.badRequest("Last name is required and should be a non-empty string");
        }

        if (!body.email || typeof body.email !== 'string' || !EmailValidate(body.email)) {
            throw PersonalizeErrors.badRequest("Email is required and should be a valid email address");
        }

  
        if (!body.address || typeof body.address !== 'string') {
            throw PersonalizeErrors.badRequest("Address should be a string if provided");
        }

      
        if (!body.cellphone || typeof body.cellphone !== 'string') {
            throw PersonalizeErrors.badRequest("Cellphone should be a string if provided");
        }

        if (!body.gender || (body.gender !== 'M' && body.gender !== 'F')) {
            throw PersonalizeErrors.badRequest("Gender is required and should be 'M' or 'F'");
        }
    }
}
