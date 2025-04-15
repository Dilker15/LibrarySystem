import { UserRepository } from "../../interfaces/UserRepository";


export class UsecaseGetById{

    constructor(private readonly userRepo:UserRepository){

    }


    async execute(user_id:string):Promise<any>{
        const user = await this.userRepo.getUser(user_id);
        const {id,password,createdAt,updatedAt,...userFound} = user;
        return userFound
    }
}