import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { LoginUseCase } from "../../domain/usescases/Users/LoginUseCase";
import { AuthRepositoryImp } from "../../infraestructure/repositories/AuthRepositoryImp";
import { AuthServices } from "../../domain/config/Services/AuthServices";


export class AuthRoutes{

    static startAuthRoutes():Router{
        const router = Router();
        const authRepo = new AuthRepositoryImp();
        const authService = new AuthServices();
        const useCase = new LoginUseCase(authRepo,authService);
        const authCon = new AuthController(useCase);

        router.post("/login",authCon.login);

        return router;
    }
}