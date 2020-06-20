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
}

export const followAPI = {
    userUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    userFollow(userId) {
        return instance.post(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
