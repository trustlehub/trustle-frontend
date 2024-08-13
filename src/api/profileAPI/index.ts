import axios from "axios";
import { baseURL } from "../../helper";

export interface ProfileModel {
    name: string,
    birthday: Date,
    favorite: string,
    location: string,
    socials: [{
        platform: string,
        links: [string]
    }]
}

const add = async (data: ProfileModel, token: string) => {
    axios
        .post(`${baseURL}/profile/add`, data, {
            headers: { 'Authorization': token }
        })
        .then(res => res.data)
        .catch(err => console.log({ error: err }));

}
const search = async (data: ProfileModel, token: string) => {
    axios
        .post(`${baseURL}/profile/search`, data, {
            headers: { 'Authorization': token }
        })
        .then(res => res.data)
        .catch(err => console.log({ error: err }));
}

const get = async (id: number, token: string) => {
    axios
        .get(`${baseURL}/profile/${id}`, { headers: { 'Authorization': token } })
        .then(res => res.data)
        .catch(err => console.log({ error: err }))
}

const getAll = async (token: string) => {
    axios
        .get(`${baseURL}/profile/`, { headers: { 'Authorization': token } })
        .then(res => res.data)
        .catch(err => console.log({ error: err }))
}

const ProfileAPI = {
    add: (data: ProfileModel, token: string) => add(data, token),
    search: (data: ProfileModel, token: string) => search(data, token),
    get: (id: number, token: string) => get(id, token),
    getAll: (token: string) => getAll(token),
}

export default ProfileAPI