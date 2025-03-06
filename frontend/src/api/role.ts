import axios from "axios"

const path = 'http://localhost:8080/role'

export const getAllRole = async () => {
    const {data} = await axios.get(`${path}`)
    return data
}