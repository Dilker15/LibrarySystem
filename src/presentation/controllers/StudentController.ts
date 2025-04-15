import { Request,Response } from "express"
import { UsecaseCreateStudent } from "../../domain/usescases/students/usecaseCreateStudent"
import { UsecaseDeleteStudent } from "../../domain/usescases/students/usecaseDeleteStudent"
import { UsecaseGetAllStudent } from "../../domain/usescases/students/usecaseGetAllStudents"
import { UsecaseUpdateStudent } from "../../domain/usescases/students/usecaseUpdateStudent"
import { UsecaseGetStudentById } from "../../domain/usescases/students/usecaseGetStudentById"
import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors"


export class StudentController{
    
    constructor(private readonly usecaseCreateStudent:UsecaseCreateStudent,
        private readonly usecaseDeleteStudent:UsecaseDeleteStudent,
        private readonly usecaseGetAllStudents:UsecaseGetAllStudent,
        private readonly usecaseUpdateStudent:UsecaseUpdateStudent,
        private readonly usecaseGetStudentById:UsecaseGetStudentById){

    }


    createStudent = async(req:Request,res:Response)=>{
        try{
            const studentCreated = await this.usecaseCreateStudent.execute(req.body);
            res.status(200).json(studentCreated);
        }catch(error){
            console.log(error);
            const currenError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Error on Server.");
            res.status(currenError.statusCode).json(currenError.message);
        }
    }

    
    getStudentById  = async(req:Request,res:Response)=>{
        try{
            const id = req.params.id;
            const student = await this.usecaseGetStudentById.execute(id);
            res.status(200).json(student);
        }catch(error){
            const currenError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Error on Server.");
            res.status(currenError.statusCode).json(currenError.message);
        }
    }


    getAllStudents = async(req:Request,res:Response)=>{
        try{
            const studentCreated = await this.usecaseGetAllStudents.execute();
            res.status(200).json(studentCreated);
        }catch(error){
            const currenError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Error on Server.");
            res.status(currenError.statusCode).json(currenError.message);
        }
    }


    updateStudent = async(req:Request,res:Response)=>{
        try{
            const {id} = req.params;
            const studentUpdate = await this.usecaseUpdateStudent.execute(req.body,id);
            res.status(200).json(studentUpdate);
        }catch(error){
            const currenError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Error on Server.");
            res.status(currenError.statusCode).json(currenError.message);
        }
    }


    deleteStudent = async(req:Request,res:Response)=>{
        try{
            const {id} = req.params;
            const studentDeleted = await this.usecaseDeleteStudent.execute(id);
            res.status(200).json(studentDeleted);
        }catch(error){
            const currenError = error instanceof PersonalizeErrors ? error : PersonalizeErrors.internalError("Error on Server.");
            res.status(currenError.statusCode).json(currenError.message);
        }
    }


}