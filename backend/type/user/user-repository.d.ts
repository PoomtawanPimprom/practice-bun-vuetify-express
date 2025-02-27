import type { User } from "../model"



export type UserRepositoryType = {
    findAll(): Promise<User[]>
    findById(userId: number | string): Promise<User>
    insert(userRequest: UserRequest): Promise<void>
    update(userId: number | string, userRequest: UserRequest): Promise<void>
}