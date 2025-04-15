
import { ObjectId } from 'mongodb'
import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors";
import { CreateUserDto } from "../../domain/Dtos/UsersDto/CreateUserDto";
import { UpdateUserDto } from "../../domain/Dtos/UsersDto/UpdateUserDto";
import { UserEntity } from "../../domain/entities/UserEntity";
import { UserRepository } from "../../domain/interfaces/UserRepository";
import { User } from "../mongo/models/Users";
import { emit } from 'process';



export class UserRepositoryImp implements UserRepository{



    async createUser(user: CreateUserDto): Promise<UserEntity> {
        const userF = await User.findOne({email:user.email});
        if(userF){
            throw PersonalizeErrors.badRequest("Email already Exists");
        }
        const userCreated = await User.create({name:user.name,last_name:user.last_name,email:user.email,password:user.password,cratead_on:new Date(),updated_on:new Date(),rol_id:user.role_id});
        return UserEntity.toUserEntity(userCreated._id.toString(),userCreated.name,userCreated.last_name,userCreated.email,userCreated.password,userCreated.rol_id.toString(),userCreated.state);
    }
    
    async getUser(id: string): Promise<UserEntity> {
        const user = await User.findById(id);
        if(!user){
            throw PersonalizeErrors.badRequest(`User with Id ${id} not found`);
        }
        return UserEntity.toUserEntity(user._id.toString(),user.name,user.last_name,user.email,user.password,user.rol_id.toString(),user.state);
    }

    async getUsers(): Promise<UserEntity[]> {
        const users = await User.find();
        return users.map(item => 
            UserEntity.toUserEntity(
                item._id.toString(),
                item.name,
                item.last_name,
                item.email,
                item.password,
                item.rol_id?.toString() || '',
                item.state,
            )
        );
    }
    

    async updateUser(id:string,user: UpdateUserDto): Promise<UserEntity> {
        const userToUpdate = await User.findById(id);
        if(!userToUpdate){
            throw PersonalizeErrors.badRequest(`User with id : ${id} not Found`);
        }
        const userMail = User.find({email:user.email});
        const exists = (await userMail).some(item=>item.id!=id)
        if(exists){
            throw PersonalizeErrors.badRequest(`Email ${user.email} already Exists`);
        }

        userToUpdate.name=user.name;
        userToUpdate.email=user.email;
        userToUpdate.last_name=user.last_name;
        userToUpdate.state = user.state;
        userToUpdate.rol_id=new ObjectId(user.rol_id);
        userToUpdate.password=user.password;
        userToUpdate.updated_on=new Date();

        await userToUpdate.save();
        return UserEntity.toUserEntity(userToUpdate.id,userToUpdate.name,userToUpdate.last_name,userToUpdate.email,userToUpdate.password,userToUpdate.rol_id.toString(),userToUpdate.state);

    }

    async deleteUser(id: string): Promise<UserEntity> {
        const obj = new ObjectId(id);
       const user = await User.findById(obj);
       if(!user){
          throw PersonalizeErrors.badRequest(`User with id: ${id} no Found`);
       }
       
       user.state=false;
       await user.save();
       return UserEntity.toUserEntity(user._id.toString(),user.name,user.last_name,user.email,user.password,user.rol_id.toString(),user.state);

    }


}