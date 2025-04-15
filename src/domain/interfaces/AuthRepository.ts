import { LoginDto } from "../Dtos/Auth/LoginDto";
import { UserEntity } from "../entities/UserEntity";



export interface AuthRepository{

    login(data:LoginDto):Promise<UserEntity>;

}