import { Request,Response } from "express"
import { CreateUserDto } from "../../domain/Dtos/UsersDto/CreateUserDto";
import { CreateUserValidator } from "../../domain/Dtos/Validators/CreateUserValidator";
import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors";
import { UserRepository } from "../../domain/interfaces/UserRepository";
import { UpdateUserUseCase } from "../../domain/usescases/Users/UpdateUseCase";
import { UseCaseGetAllUser } from "../../domain/usescases/Users/usecaseGetAll";
import { UsecaseGetById } from "../../domain/usescases/Users/usecaseGetById";
import { UsecaseDeleteUser } from "../../domain/usescases/Users/usecaseDeleteUser";


export class UserController{

    constructor(private readonly userRepo:UserRepository,
        private readonly usecaseUpdate:UpdateUserUseCase,
        private readonly getAlluse:UseCaseGetAllUser,
        private readonly getByIduse:UsecaseGetById,
        private readonly deleteUsecase:UsecaseDeleteUser
    
    ){

    }


    createUser = async(req:Request,res:Response)=>{
       try{
          CreateUserValidator.validate(req.body);
          const userData = await CreateUserDto.generate(req.body);
          const data = await this.userRepo.createUser(userData);
          res.json({
            data,
          });
       }catch(error){
           const currenError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Something was wrong : "+error)
           res.status(currenError.statusCode).json(currenError.message);
       }
    }


    update = async(req:Request,res:Response)=>{
        const user_id = req.params.id;
        try{
            const data =await this.usecaseUpdate.execute(req.body,user_id);
            res.json(data);
        }catch(error){
             const currentError = error instanceof PersonalizeErrors ? error:PersonalizeErrors.internalError("Server Error :"+error);
             res.status(currentError.statusCode).json(currentError.message);
        }
    }


    getById = async(req:Request,res:Response)=>{
        const id = req.params.id;
      try{
          const user = await this.getByIduse.execute(id);
          res.status(200).json(user);
      }catch(error){
        const currentError = error instanceof PersonalizeErrors ? error:PersonalizeErrors.internalError("Server Error : "+error);
        res.status(currentError.statusCode).json(currentError.message);
      }
    }


    getAll = async(req:Request,res:Response)=>{
        try{
            const users = await this.getAlluse.execute();
            res.json({users})
        }catch(error){
            console.log(error);
            const currentError = error instanceof PersonalizeErrors ? error:PersonalizeErrors.internalError("Server Error : "+ error);
            res.status(currentError.statusCode).json(currentError.message);
        }
    }


    deleteUser = async(req:Request,res:Response)=>{
        try{
            const user = await this.deleteUsecase.execute(req.params.id);
            res.json(user);
        }catch(error){
            console.log(error);
            res.json("User error to Delete");
        }  
    }




}