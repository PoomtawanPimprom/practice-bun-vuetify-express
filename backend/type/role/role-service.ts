import type { RoleRequest, RoleResponse, UserRequest, UserResponse } from "../model"


export type RoleServiceType = {
    findAll(): Promise<RoleResponse[]>
    findById(roleId:number|string): Promise<RoleResponse>
    insert(roleRequest:RoleRequest): Promise<void>
    update(roleId: number|string, roleRequest: RoleRequest): Promise<void>
} 