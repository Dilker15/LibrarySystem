import { StudentRepository } from "../../interfaces/StudentRepository";
import { CreateStudentDto } from "../../Dtos/StudentDto/CreateStudentDto";
import { CreateStudentValidator } from "../../Dtos/Validators/Students/CreateStudentValidator";
import { StudentEntity } from "../../entities/StudentEntity";


export class UsecaseCreateStudent{

    constructor(private readonly studenRepo:StudentRepository){

    }

    async execute(body:{[key:string]:any}):Promise<StudentEntity>{
        CreateStudentValidator.validate(body);
        const createDto = CreateStudentDto.generate(body);
        const newStudent = await this.studenRepo.createStudent(createDto);
        return newStudent;
    }
}