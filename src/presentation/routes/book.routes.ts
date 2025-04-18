import { Router } from "express";
import { BookController } from "../controllers/BookController";
import { UsecaseCreateBook } from "../../domain/usescases/books/usecaseCreateBook";
import { BookRepositoryImp } from "../../infraestructure/repositories/BookRepositoryImp";
import { UsecaseUpdateBook } from "../../domain/usescases/books/usecaseUpdateBook";
import { UsecaseGetAllBooks } from "../../domain/usescases/books/usecaseGetAllBooks";
import { UsecaseGetBookByIsbn } from "../../domain/usescases/books/usecaseGetBookByIsbn";
import { UsecaseGetBookByName } from "../../domain/usescases/books/usecaseGetBookByName";
import { UsecaseDeleteBook } from "../../domain/usescases/books/usecaseDeleteBook";


export class BookRoutes{

        static startBookRoutes():Router{
            
            const router = Router();
            const repository = new BookRepositoryImp();

            const createBook = new UsecaseCreateBook(repository);
            const updateBook = new UsecaseUpdateBook(repository);
            const getAllBook = new UsecaseGetAllBooks(repository);
            const getBookByIsbn = new UsecaseGetBookByIsbn(repository);
            const getBookByName = new UsecaseGetBookByName(repository);
            const deleteBook = new UsecaseDeleteBook(repository);
            
            
            const controller = new BookController(createBook,updateBook,getAllBook,getBookByIsbn,getBookByName,deleteBook);

            router.get('/',controller.getAllBooks);
            router.post('/',controller.createBook);
            router.get('/byisbn/:isbn',controller.getBookByIsbn);
            router.get('/byname/:name',controller.getBookByName);
            router.put('/:isbn',controller.updateBook);
            router.delete('/:isbn',controller.deleteBook);

            return router;
        }

}