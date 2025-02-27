import { Router, type RouterOptions } from "express";
import type { RoleControllerType, UserControllerType } from "../type";

export default class RoleRouter{ 
    protected static instance: RoleRouter;

    protected constructor(
        private readonly roleController: RoleControllerType
    ){}

    public static getInstance(UserController:UserControllerType): RoleRouter{
        if (this.instance !== undefined) return this.instance;

        this.instance = new RoleRouter(UserController);
    
        return this.instance;
    }

    public getRouter(option:RouterOptions):Router{
        return Router(option)
            .get("/",this.roleController.findAll.bind(this.roleController))
            .get("/:id",this.roleController.findById.bind(this.roleController))
            .post("/",this.roleController.insert.bind(this.roleController))
            .put("/:id",this.roleController.update.bind(this.roleController))
    }
}