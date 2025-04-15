import { StudentRepository } from "../../interfaces/StudentRepository";
import { StudentEntity } from "../../entities/StudentEntity";

export class UsecaseGetStudentById{

    constructor(private readonly studenRepo:StudentRepository){
   
       }

    async execute(student_id:string):Promise<StudentEntity>{
        const student = await this.studenRepo.getStudentById(student_id);
        return student;
    }
}