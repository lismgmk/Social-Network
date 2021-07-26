import axios from "axios"
import {
    formDataType,
    getAuthorDataRespType,
    getAuthorRespType, getProfileUserType,
    getUserRespType,
    postFollowRespType
} from "../Types/types";



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'a40d8e19-8ad7-4404-b77e-7dea185478ff'
    }
})

export const userApi = {
    getUsers(pageSize = 3, actionPage = 10){
        return instance.get<getUserRespType>(`users?count=${pageSize}&page=${actionPage}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(id: number){
        return instance.delete<postFollowRespType<{}>>(`follow/${id}`)
    },
    follow(id: number){
        return instance.post<postFollowRespType<{}>>(`follow/${id}`)
    },
    getOneUser(param: number){
        console.warn('try else method')
        return authorApi.getProfileUser(param)
    }
}

export const headerApi = {
    getAuthor() {
        return instance.get<getAuthorRespType<getAuthorDataRespType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    logInAuthor(formData: formDataType) {
        return instance.post<postFollowRespType<{ userId: number}>>('/auth/login', formData)
    },
    logOutAuthor() {
        return instance.delete<postFollowRespType<{}>>('/auth/login')
    }
}

export const authorApi = {
    setStatusAuthor(status: string) {
        debugger
        return instance.put<postFollowRespType<{}>>(`/profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
    getStatusAuthor(param: number | null){
        return instance.get<string>(`/profile/status/${param}`)
            .then(response => {
                return response.data
            })
    },
    getProfileUser(param: number | null){
        return instance.get<getProfileUserType>(`profile/${param}`)
            .then(response => {
                return response.data
            })
    }
}

