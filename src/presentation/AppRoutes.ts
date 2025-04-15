import { Router } from "express";
import { AuthRoutes } from "./routes/auth.routes";
import { UserRoutes } from "./routes/user.routes";
import { verifyToken } from "./middlewares/VerifyTokenMiddleware";
import { CategoryRoutes } from "./routes/category.routes";
import { StudenRoutes } from "./routes/student.routes";



export class AppRoutes{

    static startAppRoutes():Router{
        const router = Router();
        router.use('/api/auth',AuthRoutes.startAuthRoutes());
        router.use('/api/users',verifyToken,UserRoutes.startUserRoutes());
        router.use('/api/categories',verifyToken,CategoryRoutes.startRoutes());
        router.use('/api/students',verifyToken,StudenRoutes.startStudentRoutes());

        return router;
    }


}