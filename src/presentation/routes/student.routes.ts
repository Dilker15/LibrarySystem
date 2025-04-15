import {Router} from 'express';
import { StudentController } from '../controllers/StudentController';
import { StudenRepositoryImp } from '../../infraestructure/repositories/StudentRepositoryImp';
import { UsecaseCreateStudent } from '../../domain/usescases/students/usecaseCreateStudent';
import { UsecaseDeleteStudent } from '../../domain/usescases/students/usecaseDeleteStudent';
import { UsecaseUpdateStudent } from '../../domain/usescases/students/usecaseUpdateStudent';
import { UsecaseGetStudentById } from '../../domain/usescases/students/usecaseGetStudentById';
import { UsecaseGetAllStudent } from '../../domain/usescases/students/usecaseGetAllStudents';

export class StudenRoutes{

    static startStudentRoutes():Router{
        const router = Router();
        const repository = new StudenRepositoryImp();
        const usecaseCreateStudent = new UsecaseCreateStudent(repository);
        const usecaseDeleteStudent = new UsecaseDeleteStudent(repository);
        const usecaseUpdateStudent = new UsecaseUpdateStudent(repository);
        const usecaseGetStudentById =new UsecaseGetStudentById(repository);
        const usecaseGetAllStudents = new UsecaseGetAllStudent(repository);

        const controller = new StudentController(usecaseCreateStudent,
                                                 usecaseDeleteStudent,
                                                 usecaseGetAllStudents,
                                                 usecaseUpdateStudent,
                                                 usecaseGetStudentById);

        router.post('/',controller.createStudent);
        router.get('/',controller.getAllStudents)
        router.get('/:id',controller.getStudentById);
        router.put('/:id',controller.updateStudent);
        router.delete('/:id',controller.deleteStudent);
        
        
        return router;
    }

}