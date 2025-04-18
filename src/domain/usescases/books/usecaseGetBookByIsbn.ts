import { BookEntity } from "../../entities/BookEntity";
import { BookRepository } from "../../interfaces/BookRepository";



export class UsecaseGetBookByIsbn{


    constructor(private readonly bookRepo:BookRepository){

    }
    
    async execute(isbn:string):Promise<BookEntity>{
        const book = await this.bookRepo.getBookByIsbn(isbn);
        return book;
    }
}