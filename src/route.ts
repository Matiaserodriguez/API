import { Router } from "express";

import { validateToken } from "./logIn/middleware/validateToken";
import { signup, signin, list } from "./logIn/controller/auth.controller";
import { validateRequest } from "./business/middleware/validateRequest";
import { listUsers } from "./business/controller/auth.controller";
import { environmentalVariables as ENV } from "./env";
import { validationSchema } from "./logIn/middleware/validateSchema";
import { SignUpSchema } from "./logIn/model/SignUpSchema";
import { SignInSchema } from "./logIn/model/SignInSchema";


const router: Router = Router();

// All routes
router.post('/signup', validationSchema(SignUpSchema), signup);
router.post('/signin', validationSchema(SignInSchema), signin);
router.get('/userslist', validateToken, list);
router.get(`/${ENV.secret_route}`, validateRequest, listUsers);

export default router;