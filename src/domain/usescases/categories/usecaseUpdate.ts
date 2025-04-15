import { UpdateCategoryDto } from "../../Dtos/CategoryDto/UpdateCategoryDto";
import { UpdateCategoryValidator } from "../../Dtos/Validators/categories/updateCategory";
import { CategoryEntity } from "../../entities/CategoryEntity";
import { CategoryRepository } from "../../interfaces/CategoryRepository";


export class UseCaseUpdateCategory{

    constructor(private readonly categoryRepo:CategoryRepository){

    }

    async execute(id_category:string,data:{[key:string]:any}):Promise<CategoryEntity>{
        UpdateCategoryValidator.validate(data);
        const dto = UpdateCategoryDto.generate(data);
        const categoryUpdated = await this.categoryRepo.updateCategory(id_category,dto);
        return categoryUpdated;


    }

}