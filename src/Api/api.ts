import axios from "axios"

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
export type IUser = {
    email: string
    password: string
    rememberMe: boolean
}

export type formDataType = IUser & {captcha?: boolean}

export type getAuthorRespType<D> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

export type getAuthorDataRespType = {
    id: number
    login: string
    email: string
}

export type getUserRespType = {
    items: Array<getUserItemsType>
    totalCount: number
    error: string
}

export type getUserItemsType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

export type postFollowRespType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type getProfileUserType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType | null
    photos: {
        small: string
        large: string
    } | null
}

type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

