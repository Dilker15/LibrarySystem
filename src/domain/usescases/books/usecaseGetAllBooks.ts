import { BookEntity } from "../../entities/BookEntity";
import { BookRepository } from "../../interfaces/BookRepository";


export class UsecaseGetAllBooks{


    constructor(private readonly bookRepo:BookRepository){

    }

    async execute():Promise<BookEntity[]>{
        const books = await this.bookRepo.getAllBooks();
        return books;
    }
}