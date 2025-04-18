import { CreateBookDto } from "../Dtos/BookDto/CreateBookDto";
import { UpdateBookDto } from "../Dtos/BookDto/UpdateBookDto";
import { BookEntity } from "../entities/BookEntity";





export interface BookRepository{

    createBook(date:CreateBookDto):Promise<BookEntity>;
    getAllBooks():Promise<BookEntity[]>;
    getBookByIsbn(isbn:string):Promise<BookEntity>;
    getBookByName(name:string):Promise<BookEntity>;
    updateBook(isbn:string,data:UpdateBookDto):Promise<BookEntity>;
    deleteBook(isbn:string):Promise<boolean>;


}