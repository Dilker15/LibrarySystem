import { BookEntity } from "../../entities/BookEntity";
import { BookRepository } from "../../interfaces/BookRepository";



export class UsecaseGetBookByName{

    constructor(private readonly bookRepo:BookRepository){

    }

    async execute(name:string):Promise<BookEntity>{
        const book = await this.bookRepo.getBookByName(name);
        return book;
    }
}