import type { Role, RoleRequest } from "../model"


export type RoleRepositoryType = {
    findAll(): Promise<Role[]>
    findById(roleId: number | string): Promise<Role>
    insert(roleRequest: RoleRequest): Promise<void>
    update(roleId: number | string, roleRequest: RoleRequest): Promise<void>
}