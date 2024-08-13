import axios from "axios";
import { baseURL } from "../../helper";

export interface IssueModel {
  name: string, 
  email: string,
  phone: string,
  description: string
}

const add = async (data: IssueModel, token: string) => {
    axios
        .post(`${baseURL}/report/add`, data, {
            headers: { 'Authorization': token }
        })
        .then(res => res.data)
        .catch(err => console.log({ error: err }));

}

const get = async (id: number, token: string) => {
    axios
        .get(`${baseURL}/report/${id}`, { headers: { 'Authorization': token } })
        .then(res => res.data)
        .catch(err => console.log({ error: err }))
}

const getAll = async (token: string) => {
    axios
        .get(`${baseURL}/report/`, { headers: { 'Authorization': token } })
        .then(res => res.data)
        .catch(err => console.log({ error: err }))
}

const ProfileAPI = {
    add: (data: IssueModel, token: string) => add(data, token),
    get: (id: number, token: string) => get(id, token),
    getAll: (token: string) => getAll(token),
}

export default ProfileAPI