import axios from "axios";
import { cronbaseURL } from "../../helper";

export interface SearchModel {
    name: string
}

// const add = async (data: SearchModel, token: string) => {
//     axios
//         .post(`${baseURL}/profile/add`, data, {
//             headers: { 'Authorization': token }
//         })
//         .then(res => res.data)
//         .catch(err => console.log({ error: err }));
// }

// const get = async (id: number, token: string) => {
//     axios
//         .get(`${baseURL}/profile/${id}`, { headers: { 'Authorization': token } })
//         .then(res => res.data)
//         .catch(err => console.log({ error: err }))
// }

// const getAll = async (token: string) => {
//     axios
//         .get(`${baseURL}/profile/`, { headers: { 'Authorization': token } })
//         .then(res => res.data)
//         .catch(err => console.log({ error: err }))
// }

const search = async (fullname: string) => {
    axios
        .post(`${cronbaseURL}/cron/serp_result`, {fullname} )
        .then(res => res.data)
        .catch(err => console.log({ error: err }));
}

const cronAPI = {
    search: (fullname:string) => search(fullname),
}

export default cronAPI