import type { Request, Response } from "express";
import type UserService from "../service/user";
import type { UserControllerType, UserRequest, UserResponse, UserServiceType } from "../type";

export default class UserController implements UserControllerType {
    protected static instance: UserController
    protected constructor(
        private readonly userService: UserServiceType
    ) { }
    public static getInstance(userService: UserService): UserController {
        if (this.instance !== undefined) return this.instance;

        this.instance = new UserController(userService);

        return this.instance;
    }

    public async findAll(req: Request, res: Response): Promise<void> {
        const UserResponse: UserResponse[] = await this.userService.findAll();
        res.json(UserResponse)
    }

    public async findById(req: Request, res: Response): Promise<void> {
        const params = req.params.id;
        const UserResponse:UserResponse = await this.userService.findById(params)
        res.json(UserResponse)
    }

    public async insert(req: Request, res: Response): Promise<void> {
        const UserRequest: UserRequest = req.body
        await this.userService.insert(UserRequest)
        res.json("success")
    }

    public async update(req: Request, res: Response): Promise<void> {
        const params = req.params.id;
        const UserRequest: UserRequest = req.body
        await this.userService.update(params,UserRequest)
        res.json("success")
    }
}