
import {Request,Response} from 'express'
import { UsecaseCreateCategory } from '../../domain/usescases/categories/usecaseCreate';
import { PersonalizeErrors } from '../../domain/config/Errors/PersonalizeErrors';
import { UsecaseGetAllCategories } from '../../domain/usescases/categories/usecaseGetAll';
import { UseCaseUpdateCategory } from '../../domain/usescases/categories/usecaseUpdate';
import { UseCaseDeleteCategory } from '../../domain/usescases/categories/usecaseDelete';


export class CategoryController{

    constructor(private readonly usecaseCreateCategory:UsecaseCreateCategory,
                private readonly useCaseGetAllCategories:UsecaseGetAllCategories,
                private readonly useCaseUpdateCategory:UseCaseUpdateCategory,
                private readonly useCaseDeleteCategory:UseCaseDeleteCategory
    ){

    }

    getAllCategories = async(req:Request,res:Response)=>{
        try{
            const listCategories = await this.useCaseGetAllCategories.execute();
            res.status(200).json(listCategories);
        }catch(error){
            const currenError = error instanceof PersonalizeErrors ? error:PersonalizeErrors.internalError("Something was wrong on server");
            res.status(currenError.statusCode).json(currenError.message);
        }
    }


    createCategory = async(req:Request,res:Response)=>{
        try{
            const categoryCreated = await this.usecaseCreateCategory.execute(req.body);
            res.status(200).json(categoryCreated);
        }catch(error){
            const curren = error instanceof PersonalizeErrors ? error:PersonalizeErrors.internalError("Something was wrong on Server");
            res.status(curren.statusCode).json(curren.message);
        }
    }

    updateCategory = async(req:Request,res:Response)=>{
        const id = req.params.id;
        try{
            const category = await this.useCaseUpdateCategory.execute(id,req.body);
            res.status(200).json(category);
        }catch(error){
            const curren = error instanceof PersonalizeErrors ? error:PersonalizeErrors.internalError("Something was wrong updating on Server");
            res.status(curren.statusCode).json(curren.message);
        }

    }

    deleteCategory = async(req:Request,res:Response)=>{
        try{
            const id = req.params.id;
            const categoryDeleted = await this.useCaseDeleteCategory.execute(id);
            res.status(200).json(categoryDeleted);
        }catch(error){
            const curren = error instanceof PersonalizeErrors ? error:PersonalizeErrors.internalError("Something was wrong updating on Server");
            res.status(curren.statusCode).json(curren.message);
        }
    }


    
}