import { BookRepository } from "../../interfaces/BookRepository";



export class UsecaseDeleteBook{

    constructor(private readonly bookRepo:BookRepository){

    }

    async execute(isbn:string):Promise<boolean>{
        const data = await this.bookRepo.deleteBook(isbn);
        return data;
    }
}