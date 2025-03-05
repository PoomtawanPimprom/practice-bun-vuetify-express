import { PrismaClient } from '@prisma/client'
import type { RoleRepositoryType } from '../type/role/role-repository';
import type { Role, RoleRequest } from '../type/model';

const prisma = new PrismaClient()

export default class RoleRepository implements RoleRepositoryType {
    protected static instance: RoleRepository
    protected constructor(
        // private readonly connect:unknown,
        // private readonly logger:unknown,
    ) { }

    public static getInstance(): RoleRepository {
        if (!this.instance) { 
            this.instance = new RoleRepository();
        }
        return this.instance;
    }

    public async findById(roleId: number | string): Promise<Role> {

        const data = await prisma.role.findUnique({
            where: { id: Number(roleId) },

        })
        if (data === null) throw new Error(`role not found`)

        return data
    }

    public async findAll(): Promise<Role[]> {

        const data = await prisma.role.findMany({
        })
        if (data === null) throw new Error(`role not found`)
        return data
    }

    public async insert(roleRequest: RoleRequest): Promise<void> {
        const { roleName } = roleRequest
        if(roleName === undefined)throw new Error(`role not found`)
        await prisma.role.create({
            data: { roleName }
        })
    }

    public async update(roleId: number | string, roleRequest: RoleRequest): Promise<void> {
        const {id,roleName} = roleRequest
        await prisma.role.update({
            where:{id: Number(roleId)},
            data:{id,roleName}
        })
    }
}