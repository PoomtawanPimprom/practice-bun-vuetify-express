import type { User, UserRepositoryType, UserRequest } from "../type";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class UserRepository implements UserRepositoryType {
    protected static instance: UserRepository
    protected constructor(
        // private readonly connect:unknown,
        // private readonly logger:unknown,
    ) { }

    public static getInstance(): UserRepository {
        if (!this.instance) { 
            this.instance = new UserRepository();
        }
        return this.instance;
    }

    public async findById(userId: number | string): Promise<User> {

        const data = await prisma.user.findUnique({
            where: { id: Number(userId) },
            include: { role: true }

        })
        if (data === null) throw new Error(`user not found`)

        return data
    }

    public async findAll(): Promise<User[]> {

        const data = await prisma.user.findMany({
            include: { role: true }
        })
        if (data === null) throw new Error(`user not found`)
        return data
    }

    public async insert(userRequest: UserRequest): Promise<void> {
        const { fname, lname, roleId } = userRequest
        await prisma.user.create({
            data: { fname, lname, roleId }
        })
    }

    public async update(userId: number | string, userRequest: UserRequest): Promise<void> {
        const {fname,lname,roleId} = userRequest
        await prisma.user.update({
            where:{id: Number(userId)},
            data:{ fname,lname,roleId}
        })
    }
}