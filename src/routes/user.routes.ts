import { Router } from "express";
import { UserController } from "../controllers/user/UserController";
import { CreateUserDto } from "../dtos/user/CreateUserDTO";
import { validateRequest } from "../middlewares/validateRequest";

const router = Router();

router.post("/", validateRequest(CreateUserDto), UserController.create);

export default router;
