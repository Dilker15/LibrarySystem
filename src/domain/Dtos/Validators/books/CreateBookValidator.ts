import { PersonalizeErrors } from "../../../config/Errors/PersonalizeErrors";

export class CreateBookValidator {

    
  static validate(body: { [key: string]: any }) {

    if (!body.isbn) {
      throw PersonalizeErrors.badRequest("ISBN is required and must be a non-empty string.");
    }

    if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
      throw PersonalizeErrors.badRequest("Name is required and must be a non-empty string.");
    }

    if (!body.description && typeof body.description !== 'string') {
      throw PersonalizeErrors.badRequest("Description must be a string.");
    }


    if (!body.category_id || typeof body.category_id !== 'string' || body.category_id.trim() === '') {
      throw PersonalizeErrors.badRequest("Category ID is required and must be a non-empty string.");
    }
    const authors = JSON.parse(body.authors);
    if (!body.authors || !Array.isArray(authors) || authors.length === 0) {
      throw PersonalizeErrors.badRequest("Authors is required and must be a non-empty array.");
    }

  }
}
