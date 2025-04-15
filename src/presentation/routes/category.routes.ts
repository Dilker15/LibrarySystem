import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { UsecaseCreateCategory } from "../../domain/usescases/categories/usecaseCreate";
import { CategoryRepositoryImpl } from "../../infraestructure/repositories/CategoryRepositoryImp";
import { UsecaseGetAllCategories } from "../../domain/usescases/categories/usecaseGetAll";
import { UseCaseUpdateCategory } from "../../domain/usescases/categories/usecaseUpdate";
import { UseCaseDeleteCategory } from "../../domain/usescases/categories/usecaseDelete";



export class CategoryRoutes{

    static startRoutes():Router{
        const router = Router();
        const repository = new CategoryRepositoryImpl();
        const createUsecase = new UsecaseCreateCategory(repository);
        const getAllUseCase = new UsecaseGetAllCategories(repository);
        const updateUseCase = new UseCaseUpdateCategory(repository);
        const deleteUseCase = new UseCaseDeleteCategory(repository);

        const controller = new CategoryController(createUsecase,getAllUseCase,updateUseCase,deleteUseCase);

        router.get('/',controller.getAllCategories);
        router.post('/',controller.createCategory);
        router.put('/:id',controller.updateCategory);
        router.delete('/:id',controller.deleteCategory);


        return router;
    }
}

