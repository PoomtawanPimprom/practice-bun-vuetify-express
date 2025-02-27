import type { Request, Response } from "express";
import type { RoleControllerType, RoleRequest, RoleResponse, RoleServiceType } from "../type";
import type RoleService from "../service/role";

export default class RoleController implements RoleControllerType {
    protected static instance: RoleController
    protected constructor(
        private readonly roleService: RoleServiceType
    ) { }
    public static getInstance(roleService: RoleService): RoleController {
        if (this.instance !== undefined) return this.instance;

        this.instance = new RoleController(roleService);

        return this.instance;
    }

    public async findAll(req: Request, res: Response): Promise<void> {
        const roleResponse: RoleResponse[] = await this.roleService.findAll();
        res.json(roleResponse)
    }

    public async findById(req: Request, res: Response): Promise<void> {
        const params = req.params.id;
        const RoleResponse:RoleResponse = await this.roleService.findById(params)
        res.json(RoleResponse)
    }

    public async insert(req: Request, res: Response): Promise<void> {
        const roleRequest: RoleRequest = req.body
        await this.roleService.insert(roleRequest)
        res.json("success")
    }

    public async update(req: Request, res: Response): Promise<void> {
        const params = req.params.id;
        const UserRequest: RoleRequest = req.body
        await this.roleService.update(params,UserRequest)
        res.json("success")
    }
}