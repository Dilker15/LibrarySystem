import { CreateCategoryDto } from "../../Dtos/CategoryDto/CreateCategoryDto";
import { CreateCategoryValidator } from "../../Dtos/Validators/categories/CreateCategory";
import { CategoryRepository } from "../../interfaces/CategoryRepository";



export class UsecaseCreateCategory{

    constructor(private readonly categoryRepo:CategoryRepository){

    }


    async execute(body:{[key:string]:any}):Promise<any>{
        CreateCategoryValidator.validate(body);
        const data = CreateCategoryDto.generate(body);
        const category = await this.categoryRepo.createCategory(data);
        const {id,createdAt,updatedAt,...response} = category;
        return response;
    }

}