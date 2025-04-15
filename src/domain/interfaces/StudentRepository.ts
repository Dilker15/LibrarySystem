import { StudentEntity } from "../entities/StudentEntity";
import { CreateStudentDto } from "../Dtos/StudentDto/CreateStudentDto";
import { UpdateStudentDto } from "../Dtos/StudentDto/UpdateStudentDto";

export interface StudentRepository{

    createStudent(data:CreateStudentDto):Promise<StudentEntity>;
    getStudentById(student_id:string):Promise<StudentEntity>;
    getAllStudents():Promise<StudentEntity[]>;
    updateStudent(student_id:string,data:UpdateStudentDto):Promise<StudentEntity>;
    deleteStudent(student_id:string):Promise<StudentEntity>;

}