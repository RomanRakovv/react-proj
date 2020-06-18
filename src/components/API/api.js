import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fa82a974-1258-43cd-b3d6-9dcd8a694c8f",
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return (instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            }))
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
}
