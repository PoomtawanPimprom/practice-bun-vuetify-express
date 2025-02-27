import type { UserRequest, UserResponse } from "../model"


export type UserServiceType = {
    findAll(): Promise<UserResponse[]>
    findById(userId:number|string): Promise<UserResponse>
    insert(userRequest:UserRequest): Promise<void>
    update(userId: number|string, userRequest: UserRequest): Promise<void>
} 