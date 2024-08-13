import axios from "axios";
import { baseURL } from "../../helper";

export interface UserModel {
    name?: string,
    email: string,
    password: string,
    location?: string,
    phone?: string,
    admin?: boolean
}

const signup = async (indata: UserModel) => {
    try{
        const result = await axios.post(`${baseURL}/users/signup`, indata);
        return result.data
    } catch(err:any) {
        if (err.response.status == 400) alert("Failed to sign up")
        if (err.response.status == 409) alert("User already exists")
    }
}

const login = async (indata: UserModel) => {
    try {
        const result = await axios.post(`${baseURL}/users/login`, indata)
        return result.data
    } catch (err:any) {
        if (err.response.status == 403) alert("Password incorrect")
        if (err.response.status == 404) alert("User not found")
    }

}

const UserAPI = {
    signup: (data: UserModel) => signup(data),
    login: (data: UserModel) => login(data)
}

export default UserAPI