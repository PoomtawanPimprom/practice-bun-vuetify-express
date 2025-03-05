import type UserRepository from "../repository/user";
import type { User,  UserRequest, UserResponse, UserServiceType } from "../type";

export default class UserService implements UserServiceType {
    protected static instance: UserService; 

    protected constructor(private readonly userRepo: UserRepository) {}

    public static getInstance(userRepo: UserRepository) {
        if (this.instance !== undefined) return this.instance;
        this.instance = new UserService(userRepo);
        return this.instance;
    }

    public async findById(userId: number | string): Promise<UserResponse> {
        const data: User = await this.userRepo.findById(userId);
        if (!data) {
            throw new Error("User not found");
        }
        return {
            fname: data.fname,
            lname: data.lname,
            role: data.role ? { id: data.role.id, roleName: data.role.roleName } : undefined,
        };
    }

    public async findAll(): Promise<UserResponse[]> {
        const data: User[] = await this.userRepo.findAll();
        return data.map(item => ({
            fname: item.fname,
            lname: item.lname,
            role: item.role ? { id: item.role.id, roleName: item.role.roleName } : undefined, 
        }));
    }
    

    public async insert(userRequest: UserRequest): Promise<void> {
        await this.userRepo.insert(userRequest);
    }

    public async update(userId: number | string, userRequest: UserRequest): Promise<void> {
        await this.userRepo.update(userId, userRequest);
    }
}
