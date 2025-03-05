import type RoleRepository from "../repository/role";
import type { Role, RoleRequest, RoleResponse } from "../type";
import type { RoleServiceType } from "../type/role/role-service";

export default class RoleService implements RoleServiceType {
    protected static instance: RoleService;

    protected constructor(private readonly roleRepo: RoleRepository) { }

    public static getInstance(roleRepo: RoleRepository) {
        if (this.instance !== undefined) return this.instance;
        this.instance = new RoleService(roleRepo);
        return this.instance;
    }

    public async findById(roleId: number | string): Promise<RoleResponse> {
        const data: Role = await this.roleRepo.findById(roleId);
        if (!data) {
            throw new Error("User not found");
        }
        return {
            id: data.id,
            roleName: data.roleName
        };
    }

    public async findAll(): Promise<RoleResponse[]> {
        const data: Role[] = await this.roleRepo.findAll();
        return data.map(item => ({
            id: item.id,
            roleName: item.roleName,
        }));
    }


    public async insert(roleRequest: RoleRequest): Promise<void> {
        await this.roleRepo.insert(roleRequest);
    }

    public async update(roleId: number | string, roleRequest: RoleRequest): Promise<void> {
        await this.roleRepo.update(roleId, roleRequest);
    }
}
