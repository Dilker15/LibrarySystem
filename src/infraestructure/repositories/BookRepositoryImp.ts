import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors";
import { CreateBookDto } from "../../domain/Dtos/BookDto/CreateBookDto";
import { UpdateBookDto } from "../../domain/Dtos/BookDto/UpdateBookDto";
import { BookEntity } from "../../domain/entities/BookEntity";
import { BookRepository } from "../../domain/interfaces/BookRepository";
import { Book } from "../mongo/models/Book";
import {ObjectId} from 'mongodb';


export class BookRepositoryImp implements BookRepository{

    constructor(){

    }

    async createBook(data:CreateBookDto): Promise<BookEntity> {
        const parsedAuthors = typeof data.authors === 'string' ? JSON.parse(data.authors) : data.authors;
        const userCreated = await Book.create({
            isbn:data.isbn,
            name:data.name,
            description:data.description,
            category_id:data.category_id,
            created_on:new Date(),
            updated_on:new Date(),
            authors:parsedAuthors

        });
        return BookEntity.toBookEntity(userCreated);
    }

    async getAllBooks(): Promise<BookEntity[]> {
         const books = await Book.find().populate('category_id');
         return books.map(item=>{
            return BookEntity.toBookEntity(item);
         });
    }

    async getBookByIsbn(isbn: string): Promise<BookEntity> {
        const book = await Book.findOne({isbn});
        if(!book){
            throw PersonalizeErrors.notFound(`Book with ISBN ${isbn} not found`);
        }
        return BookEntity.toBookEntity(book);
    }


    async getBookByName(name: string): Promise<BookEntity> {
        const book = await Book.findOne({name:name});
         if(!book){
            throw PersonalizeErrors.notFound(`Book with name ${name} not Found `);
         }
        return BookEntity.toBookEntity(book);
    }

    async updateBook(isbn: string, data: UpdateBookDto): Promise<BookEntity> {
    const book = await Book.findOne({ isbn });

    if (!book) {
        throw PersonalizeErrors.badRequest(`Book with isbn: ${isbn} not found`);
    }

    const existingBook = await Book.findOne({ isbn: data.isbn });
    if (existingBook && existingBook.id !== book.id) {
        throw PersonalizeErrors.badRequest(`Book with isbn: ${data.isbn} already exists.`);
    }

    const parsedAuthors = typeof data.authors === 'string' ? JSON.parse(data.authors) : data.authors;

    book.set({
        name: data.name,
        description: data.description,
        authors: parsedAuthors,
        isbn: data.isbn, 
        category_id: new ObjectId(data.category_id),
        updated_on: new Date(),
    });

    await book.save();
    return BookEntity.toBookEntity(book);
    }


    
    async deleteBook(isbn: string): Promise<boolean> {
        const book = await Book.findOne({isbn});
        if(!book){
            throw PersonalizeErrors.badRequest("book not found");
        }
        
        book.status=false;
        await book.save();
        return true;
    }


}