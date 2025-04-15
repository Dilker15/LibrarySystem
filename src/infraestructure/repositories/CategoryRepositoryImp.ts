import { ObjectId } from "mongodb";
import { CreateCategoryDto } from "../../domain/Dtos/CategoryDto/CreateCategoryDto";
import { UpdateCategoryDto } from "../../domain/Dtos/CategoryDto/UpdateCategoryDto";
import { CategoryEntity } from "../../domain/entities/CategoryEntity";
import { CategoryRepository } from "../../domain/interfaces/CategoryRepository";
import { Category } from "../mongo/models/Category";
import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors";



export class CategoryRepositoryImpl implements CategoryRepository{

    constructor(){

    }


    async createCategory(data: CreateCategoryDto): Promise<CategoryEntity> {
        const newCategory = await Category.create({
            name:data.name,
            state:data.state,
            created_on:new Date(),
            updated_on:new Date(),
        });
        return CategoryEntity.toCategoryEntity(newCategory._id.toString(),newCategory.name,newCategory.status);
        
    }

    async getAllCategories(): Promise<CategoryEntity[]> {
        const listCategories = await Category.find({status:true})
        return listCategories.map(item=>{
            return CategoryEntity.toCategoryEntity(item._id.toString(),item.name,item.status);
        });
    }



    async updateCategory(category_id: string, data: UpdateCategoryDto): Promise<CategoryEntity> {
         const id = new ObjectId(category_id);
         const newCategory = await Category.findById(id);
         if(!newCategory){
            throw PersonalizeErrors.badRequest(`category with id : ${id} not Found`);
         }
         newCategory.name=data.name;
         newCategory.status=data.state;
         newCategory.updated_on=new Date(),
         await newCategory.save();
         return CategoryEntity.toCategoryEntity(newCategory._id.toString(),newCategory.name,newCategory.status);
    }




    async deleteCategory(categor_id: string): Promise<CategoryEntity> {
        const id = new ObjectId(categor_id);
        const category = await Category.findById(id);
        if(!category){
            throw PersonalizeErrors.badRequest(`Category with id : ${id} not found`);
        }
        category.status=false;
        await category.save();
        return CategoryEntity.toCategoryEntity(category._id.toString(),category.name,category.status);
    }



}