import { CategoryEntity } from "../../entities/CategoryEntity";
import { CategoryRepository } from "../../interfaces/CategoryRepository";



export class UseCaseDeleteCategory{


    constructor(private readonly CategoryRepo:CategoryRepository){

    }


    async execute(id_category:string):Promise<CategoryEntity>{

        const categoryDeleted= await this.CategoryRepo.deleteCategory(id_category);
        return categoryDeleted;

    }
}