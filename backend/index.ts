import express, { type Request, type Response } from "express";
import UserRouter from "./router/user";
import UserRepository from "./repository/user";
import UserService from "./service/user";
import UserController from "./controller/user";
import routerOptions from "./config/router-config";

const app = express();
const port = 8080;

const startServer = async (): Promise<void> => {


  const userRepository = UserRepository.getInstance();
  const userService = UserService.getInstance(userRepository);
  const userController = UserController.getInstance(userService)
  const roleRepository = UserRepository.getInstance();
  const roleService = UserService.getInstance(roleRepository);
  const roleController = UserController.getInstance(roleService)


  const userRouter: UserRouter = UserRouter.getInstance(userController)
  const roleRouter: UserRouter = UserRouter.getInstance(roleController)
  app.use(express.json());
  app
    .use("/user",userRouter.getRouter(routerOptions))
    .use("/role",roleRouter.getRouter(routerOptions))

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
  });

  app.get("/api", (req: Request, res: Response) => {
    res.send("Hello World! from /api");
  })

  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}


await startServer()
