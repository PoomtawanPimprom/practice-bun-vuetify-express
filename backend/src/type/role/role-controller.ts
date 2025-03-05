import type { Request, Response } from "express"


export type RoleControllerType = {
    findAll(req:Request,res:Response):Promise<void>
    findById(req:Request,res:Response):Promise<void>
    insert(req:Request,res:Response):Promise<void>
    update(req:Request,res:Response):Promise<void>
} 