import { CategoryRepository } from "../../interfaces/CategoryRepository";


export class UsecaseGetAllCategories{


    constructor(private readonly categoryRepo:CategoryRepository){

    }

    async execute():Promise<any[]>{
        const list = await this.categoryRepo.getAllCategories();
        return list;
    }
}