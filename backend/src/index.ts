import express, { type Request, type Response } from "express";
import cors from "cors";  // เพิ่มการ import cors
import UserRouter from "../src/router/user";
import UserRepository from "../src/repository/user";
import UserService from "../src/service/user";
import UserController from "../src/controller/user";
import routerOptions from "./config/router-config";
import RoleRepository from "../src/repository/role";
import RoleService from "../src/service/role";
import RoleController from "../src/controller/role";
import RoleRouter from "../src/router/role";

const app = express();
const port = 8080;

const startServer = async (): Promise<void> => {

  const userRepository = UserRepository.getInstance();
  const userService = UserService.getInstance(userRepository);
  const userController = UserController.getInstance(userService);

  const roleRepository = RoleRepository.getInstance();
  const roleService = RoleService.getInstance(roleRepository);
  const roleController = RoleController.getInstance(roleService);

  const userRouter: UserRouter = UserRouter.getInstance(userController);
  const roleRouter: RoleRouter = RoleRouter.getInstance(roleController);

  app.use(cors());  // เพิ่มการใช้ cors ที่นี่
  app.use(express.json());
  
  app
    .use("/user", userRouter.getRouter(routerOptions))
    .use("/role", roleRouter.getRouter(routerOptions));

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
  });

  app.get("/api", (req: Request, res: Response) => {
    res.send("Hello World! from /api");
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
};

await startServer();
