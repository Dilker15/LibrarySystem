import { BCrypt } from "../../domain/config/BCrypt";
import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors";
import { LoginDto } from "../../domain/Dtos/Auth/LoginDto";
import { UserEntity } from "../../domain/entities/UserEntity";
import { AuthRepository } from "../../domain/interfaces/AuthRepository";
import { User } from "../mongo/models/Users";



export class AuthRepositoryImp implements AuthRepository{

    constructor(){

    }

    async login(data: LoginDto): Promise<UserEntity> {
        const user = await User.findOne({email:data.email,state:true});
        if(!user){
            throw PersonalizeErrors.badRequest("Email is not Found");
        }
        const verified = await BCrypt.comparePassword(data.password,user.password);
        if(!verified){
            throw PersonalizeErrors.badRequest("Incorrect Credentials");
        }
        return UserEntity.toUserEntity(user.id,user.name,user.last_name,user.email,user.password,user.rol_id.toString(),user.state);
    }


}