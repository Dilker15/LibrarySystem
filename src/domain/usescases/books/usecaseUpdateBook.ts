import { UpdateBookDto } from "../../Dtos/BookDto/UpdateBookDto";
import { UpdateBookValidator } from "../../Dtos/Validators/books/UdpateBookValidator";
import { BookRepository } from "../../interfaces/BookRepository";



export class UsecaseUpdateBook{


    constructor(private readonly bookRepo:BookRepository){
        
    }

    async execute(isbn:string,body:{[key:string]:any}){
        UpdateBookValidator.validate(body);
        const data = UpdateBookDto.generate(body);
        const book = await this.bookRepo.updateBook(isbn,data);
        return book;
    }
}