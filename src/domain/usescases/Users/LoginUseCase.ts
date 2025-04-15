import { AuthServices } from "../../config/Services/AuthServices";
import { LoginDto } from "../../Dtos/Auth/LoginDto";
import { UserEntity } from "../../entities/UserEntity";
import { AuthRepository } from "../../interfaces/AuthRepository";



export class LoginUseCase{
    
    constructor(private readonly auhtRepo:AuthRepository,private readonly authService:AuthServices){

    }

    async execute(data:LoginDto):Promise<any|null>{
       const user:UserEntity = await this.auhtRepo.login(data);
       const token = this.authService.generateToken(user.id);
       const {password,id,...userData} = user;
       return {userData,token};
    }
}