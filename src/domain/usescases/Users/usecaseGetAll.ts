import { UserRepository } from "../../interfaces/UserRepository";


export class UseCaseGetAllUser{

    constructor(private readonly UserRepo:UserRepository){

    }
    
    async execute(){
        const users = await this.UserRepo.getUsers();
        return users;
    }
}