import { PersonalizeErrors } from "../../../config/Errors/PersonalizeErrors";



export class UpdateBookValidator {


  static validate(body: { [key: string]: any }) {
    if (!body.isbn && (typeof body.isbn !== 'string' || body.isbn.trim() === '')) {
      throw PersonalizeErrors.badRequest("ISBN must be a non-empty string if provided.");
    }

    if (!body.name && (typeof body.name !== 'string' || body.name.trim() === '')) {
      throw PersonalizeErrors.badRequest("Name must be a non-empty string if provided.");
    }

    if (!body.description && typeof body.description !== 'string') {
      throw PersonalizeErrors.badRequest("Description must be a string if provided.");
    }

    if (!body.image && typeof body.image !== 'object') {
      throw PersonalizeErrors.badRequest("Image must be a File or an object if provided.");
    }

    if (!body.category_id && (typeof body.category_id !== 'string' || body.category_id.trim() === '')) {
      throw PersonalizeErrors.badRequest("Category ID must be a non-empty string if provided.");
    }

    if (body.authors) {
      if (!Array.isArray(body.authors)) {
        throw PersonalizeErrors.badRequest("Authors must be an array if provided.");
      }

      for (const [index, author] of body.authors.entries()) {
        if (typeof author !== 'object') {
          throw PersonalizeErrors.badRequest(`Author at index ${index} must be an object.`);
        }

        if (!author.name || typeof author.name !== 'string' || author.name.trim() === '') {
          throw PersonalizeErrors.badRequest(`Author at index ${index} must have a non-empty 'name' field.`);
        }

        if (author.nationality && typeof author.nationality !== 'string') {
          throw PersonalizeErrors.badRequest(`Author at index ${index} has an invalid 'nationality' (must be a string).`);
        }
      }
    }
  }
}
