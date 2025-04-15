import { CreateUserDto } from "../Dtos/UsersDto/CreateUserDto";
import { UpdateUserDto } from "../Dtos/UsersDto/UpdateUserDto";
import { UserEntity } from "../entities/UserEntity";


export interface UserRepository{

  createUser(user:CreateUserDto):Promise<UserEntity>;
  getUser(id:string):Promise<UserEntity>;
  getUsers():Promise<UserEntity[]>;
  updateUser(id:string,user:UpdateUserDto):Promise<UserEntity>;
  deleteUser(id:string):Promise<UserEntity>;
  
}