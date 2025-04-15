import { UserRepository } from "../../interfaces/UserRepository";



export class UsecaseDeleteUser{

    constructor(private readonly UserRepo:UserRepository){

    }

    async execute(user_id:string):Promise<any>{
        const userDeleted = await this.UserRepo.deleteUser(user_id);
        return userDeleted;
    }
}