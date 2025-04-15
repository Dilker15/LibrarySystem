import { StudentEntity } from "../../entities/StudentEntity";
import { StudentRepository } from "../../interfaces/StudentRepository";


export class UsecaseGetAllStudent{

    constructor(private readonly studenRepo:StudentRepository){
   
       }

    async execute():Promise<StudentEntity[]>{
        const studentList = await this.studenRepo.getAllStudents();  
        return studentList;
    }
}