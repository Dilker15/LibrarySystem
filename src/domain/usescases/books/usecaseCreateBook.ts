import { BookRepository } from "../../interfaces/BookRepository";
import { BookEntity } from "../../entities/BookEntity";
import { CreateBookValidator } from "../../Dtos/Validators/books/CreateBookValidator";
import { CreateBookDto } from "../../Dtos/BookDto/CreateBookDto";


export class UsecaseCreateBook{


    constructor(private readonly bookRepo:BookRepository){

    }


    async execute(body:{[key:string]:any}):Promise<BookEntity>{
        CreateBookValidator.validate(body);
        const data = CreateBookDto.generate(body);
        // HERE I HAVE TO UPLOAD PHOTO TO CLOUDINARY.
        const bookCreated = await this.bookRepo.createBook(data);
        return bookCreated;
    }
}