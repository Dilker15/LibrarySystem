import { UpdateStudentDto } from "../../Dtos/StudentDto/UpdateStudentDto";
import { UpdateStudentValidator } from "../../Dtos/Validators/Students/UpdateStudentValidator";
import { StudentEntity } from "../../entities/StudentEntity";
import { StudentRepository } from "../../interfaces/StudentRepository";


export class UsecaseUpdateStudent{


     constructor(private readonly studenRepo:StudentRepository){
    
        }

    async execute(body:{[key:string]:any},student_id:string):Promise<StudentEntity>{
        UpdateStudentValidator.validate(body);
        const data = UpdateStudentDto.generate(body);
        const useUpdated = await this.studenRepo.updateStudent(student_id,data);
        
        return useUpdated;
    }
}