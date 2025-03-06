import axios from "axios"

const path = 'http://localhost:8080/user'

export const getAllUsers = async () => {
    const { data } = await axios.get(`${path}`)
    return data
}

export const getUserById = async (id:number|string) => {
    const { data } = await axios.get(`${path}/${id}`)
    return data
}

export const createUser = async (data:{fname:string,lname:string}) => {
    const {fname,lname} = data
    const res = await axios.post(`${path}`,{fname,lname})
    console.log(res)
    return res
}

export const updateUser = async (id:string|number,data:{fname:string,lname:string}) => {
    const {fname,lname} = data
}