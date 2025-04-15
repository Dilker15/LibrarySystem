import { StudentEntity } from "../../entities/StudentEntity";
import { StudentRepository } from "../../interfaces/StudentRepository";


export class UsecaseDeleteStudent{

   constructor(private readonly studenRepo:StudentRepository){
  
      }


    async execute(student_id:string):Promise<StudentEntity>{
         const studentDeleted = await this.studenRepo.deleteStudent(student_id);
         return studentDeleted;
    }
}