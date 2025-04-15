import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserRepositoryImp } from "../../infraestructure/repositories/UserRepositoryImp";
import { verifyToken } from "../middlewares/VerifyTokenMiddleware";
import { UpdateUserUseCase } from "../../domain/usescases/Users/UpdateUseCase";
import { UseCaseGetAllUser } from "../../domain/usescases/Users/usecaseGetAll";
import { UsecaseGetById } from "../../domain/usescases/Users/usecaseGetById";
import { UsecaseDeleteUser } from "../../domain/usescases/Users/usecaseDeleteUser";


export class UserRoutes{

    static startUserRoutes():Router{
        const router = Router();
        const repo = new UserRepositoryImp();
        const UpdateUseCase = new UpdateUserUseCase(repo);
        const GetAllUseCase = new UseCaseGetAllUser(repo);
        const userByIdUseCase = new UsecaseGetById(repo);
        const userDelete = new UsecaseDeleteUser(repo);

        
        const con = new UserController(repo,UpdateUseCase,GetAllUseCase,userByIdUseCase,userDelete);

        router.post('/',con.createUser);
        router.put("/:id",con.update)
        router.get('/',con.getAll);
        router.get('/:id',con.getById)
        router.delete('/:id',con.deleteUser)
        
        return router;
    }

}