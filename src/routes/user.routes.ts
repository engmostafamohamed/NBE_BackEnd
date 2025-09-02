import { Router } from "express";
// import { UserController } from "../controllers/user/UserController";
import { storeNationalIdAndPhoneNumberController } from "../controllers/AuthController";
import { CreateUserDto } from "../dtos/user/CreateUserDTO";
import { validateRequest } from "../middlewares/validateRequest";

const router = Router();

router.post("/store", validateRequest(CreateUserDto), storeNationalIdAndPhoneNumberController);

export default router;
