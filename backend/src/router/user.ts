import { Router, type RouterOptions } from "express";
import type { UserControllerType } from "../type";

export default class UserRouter{ 
    protected static instance: UserRouter;

    protected constructor(
        private readonly userController: UserControllerType
    ){}

    public static getInstance(UserController:UserControllerType): UserRouter{
        if (this.instance !== undefined) return this.instance;

        this.instance = new UserRouter(UserController);
    
        return this.instance;
    }

    public getRouter(option:RouterOptions):Router{
        return Router(option)
            .get("/",this.userController.findAll.bind(this.userController))
            .get("/:id",this.userController.findById.bind(this.userController))
            .post("/",this.userController.insert.bind(this.userController))
            .put("/:id",this.userController.update.bind(this.userController))
    }
}