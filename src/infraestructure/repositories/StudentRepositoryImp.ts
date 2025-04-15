import { PersonalizeErrors } from "../../domain/config/Errors/PersonalizeErrors";
import { CreateStudentDto } from "../../domain/Dtos/StudentDto/CreateStudentDto";
import { UpdateStudentDto } from "../../domain/Dtos/StudentDto/UpdateStudentDto";
import { StudentEntity } from "../../domain/entities/StudentEntity";
import { StudentRepository } from "../../domain/interfaces/StudentRepository";
import { Studend } from "../mongo/models/Student";
import {ObjectId} from 'mongodb';

export class StudenRepositoryImp implements StudentRepository{

    constructor(){
        
    }

    async createStudent(data: CreateStudentDto): Promise<StudentEntity> {
        const student = await Studend.create({
            dni:data.dni,
            name:data.name,
            last_name:data.last_name,
            email:data.email,
            address:data.address,
            gender:data.gender,
            status:true,
            email_verified:false,
            cellphone:data.cellphone,
            updatedAt:new Date(),
            createdAt:new Date(),
        });
        return StudentEntity.toStudentEntity(student);
    }


    async getStudentById(student_id: string): Promise<StudentEntity> {
       const id = new ObjectId(student_id);
       const student = await Studend.findById(id);
       if(!student){
           throw PersonalizeErrors.badRequest(`User with id : ${student_id} not found`);
       }
       return StudentEntity.toStudentEntity(student);
    }


    async getAllStudents(): Promise<StudentEntity[]> {
        const studenList = await Studend.find({status:true});
        return studenList.map(item=>{
            return StudentEntity.toStudentEntity(item);
        });
    }

    async updateStudent(student_id: string, data: UpdateStudentDto): Promise<StudentEntity> {
        const id = new ObjectId(student_id);
        const student = await Studend.findById(id);
        if(!student){
            throw PersonalizeErrors.badRequest(`User with id ${student_id} not found`);
        }
        student.dni=data.dni;
        student.name=data.name;
        student.last_name=data.last_name;
        student.email=data.email;
        student.address=data.address;
        student.cellphone=data.cellphone;
        student.gender=data.gender;
        student.status=data.status;
        student.updatedAt=new Date(),
        await student.save();

        return StudentEntity.toStudentEntity(student);

    }

    async deleteStudent(student_id: string): Promise<StudentEntity> {
        const id = new ObjectId(student_id);
        const student = await Studend.findById(id);
        if(!student){
            throw PersonalizeErrors.badRequest(`Student with id ${student_id} not found`);
        }
        student.status=false;
        await student.save();
        return StudentEntity.toStudentEntity(student); 
    }

}