
import { BCrypt } from "../../config/BCrypt";
import { UpdateUserDto } from "../../Dtos/UsersDto/UpdateUserDto";
import { UpdateUserValidator } from "../../Dtos/Validators/UpdateUserValidator";
import { UserRepository } from "../../interfaces/UserRepository";

export class UpdateUserUseCase{

    constructor(private readonly userRepo:UserRepository){

    }

    async execute(data:{[key:string]:any},user_id:string):Promise<any>{
        UpdateUserValidator.validate(data)
        const dto = UpdateUserDto.generate(data);
        dto.password = await BCrypt.hashPassword(dto.password);
        const updatedUser = await this.userRepo.updateUser(user_id,dto);
        const {password,updatedAt,createdAt,id,...userUpdatedResponse} = updatedUser;
        return userUpdatedResponse;
    }
}