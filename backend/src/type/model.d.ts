export type User = {
    id?:number | undefined;
    fname?:string | undefined;
    lname?:string | undefined;
    roleId?:number | undefined;
    role?:Role | undefined
}

export type UserResponse = {
    fname:string | undefined;
    lname:string | undefined;
    role?:Role | undefined
}

export type UserRequest = {
    id?:number;
    fname:string;
    lname:string;
    roleId?:number;
    role?:Role
}

export type Role = {
    id:number | undefined;
    roleName:string | undefined;
}

export type RoleResponse = {
    id:number | undefined;
    roleName:string | undefined;
}

export type RoleRequest = {
    id:number;
    roleName?:string;
}
