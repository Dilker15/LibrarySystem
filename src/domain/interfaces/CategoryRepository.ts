
import { CategoryEntity } from "../entities/CategoryEntity";
import { CreateCategoryDto } from '../Dtos/CategoryDto/CreateCategoryDto';
import { UpdateCategoryDto } from '../Dtos/CategoryDto/UpdateCategoryDto';


export interface CategoryRepository{

    createCategory(data:CreateCategoryDto):Promise<CategoryEntity>;
    getAllCategories():Promise<CategoryEntity[]>;
    updateCategory(category_id:string,data:UpdateCategoryDto):Promise<CategoryEntity>;
    deleteCategory(categor_id:string):Promise<CategoryEntity>;

}