
export type formDataType = IUser & {captcha?: string}

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


export type IUser = {
    email: string
    password: string
    rememberMe: boolean
}