import { Router } from "express"
import  {deleteUser}  from "../controllers/usercontrollers.js"
import { getAllUsers, getUserById } from "../controllers/usercontrollers.js";
import {createUser} from "../controllers/usercontrollers";

export const userRouter = Router()

// CREATE USER
userRouter.post('/', createUser);

// GET ALL USERS
userRouter.get("/", getAllUsers);

// GET ONE USER BY ID
userRouter.get("/:id", getUserById);