import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors"
import { UsecaseCreateBook } from "../../domain/usescases/books/usecaseCreateBook"
import { UsecaseDeleteBook } from "../../domain/usescases/books/usecaseDeleteBook"
import { UsecaseGetAllBooks } from "../../domain/usescases/books/usecaseGetAllBooks"
import { UsecaseGetBookByIsbn } from "../../domain/usescases/books/usecaseGetBookByIsbn"
import { UsecaseGetBookByName } from "../../domain/usescases/books/usecaseGetBookByName"
import { UsecaseUpdateBook } from "../../domain/usescases/books/usecaseUpdateBook"
import {Request,Response} from 'express';

export class BookController{

    constructor(private readonly usecaseCreate:UsecaseCreateBook,
                private readonly usecaseUpdate:UsecaseUpdateBook,
                private readonly usecasegetAll:UsecaseGetAllBooks,
                private readonly usecaseByIsbn:UsecaseGetBookByIsbn,
                private readonly usecaseByName:UsecaseGetBookByName,
                private readonly usecaseDelete:UsecaseDeleteBook,
    ){

    }

    createBook = async(req:Request,res:Response)=>{
        try{
            const bookCreated = await this.usecaseCreate.execute(req.body);
            res.status(200).json(bookCreated);
        }catch(error){
            console.log(error);
            const currentError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Server Error creating Book");
            res.status(currentError.statusCode).json(currentError.message);
        }
    }



    getAllBooks = async(req:Request,res:Response)=>{
        try{
            const books = await this.usecasegetAll.execute();
            res.status(200).json(books);
        }catch(error){
            const currentError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Server Error get List of Books");
            res.status(currentError.statusCode).json(currentError.message);
        }
    }


    getBookByName = async(req:Request,res:Response)=>{
        try{
            const name=req.params.name;
            const book = await this.usecaseByName.execute(name);
            res.status(200).json(book);
        }catch(error){
            console.log(error);
            const currentError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Server Error get Book by Name");
            res.status(currentError.statusCode).json(currentError.message);
        }
    }


    getBookByIsbn = async(req:Request,res:Response)=>{
        try{
            const isbn = req.params.isbn;
            const book  = await this.usecaseByIsbn.execute(isbn);
            res.status(200).json(book);
        }catch(error){
            const currentError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Server Error get Book by ISBN");
            res.status(currentError.statusCode).json(currentError.message);
        }
    }


    updateBook = async(req:Request,res:Response)=>{
        try{
            const isbn = req.params.isbn;
            const book = await this.usecaseUpdate.execute(isbn,req.body);
            res.status(200).json(book);
        }catch(error){
            console.log(error);
            const currentError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Server Error Updating Book");
            res.status(currentError.statusCode).json(currentError.message);
        }
    }


    deleteBook = async(req:Request,res:Response)=>{
        try{
            const isbn = req.params.isbn;
            const book = await this.usecaseDelete.execute(isbn);
            res.status(200).json(book);
        }catch(error){
            const currentError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Server Error  Delete Book");
            res.status(currentError.statusCode).json(currentError.message);
        }
    }



}