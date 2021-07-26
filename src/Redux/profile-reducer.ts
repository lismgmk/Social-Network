import {authorApi} from "../Api/api";
import {getProfileUserType} from "../Types/types";


export const addPost = (text: string) => ({type: 'ADDPOST', text} as const);
export const addProfileUser = (model: getProfileUserType) => ({type: 'ADD_PROFILE_USER', model} as const);
export const getStatus = (status: string) => ({type: 'GET_STATUS_USER', status} as const);


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 11}
    ] as Array<postsType>,
    profileUser: null as getProfileUserType | null,
    statusAuthor: '',
}

export type InitStateProfileType = typeof initialState

const profileReduser = (state = initialState, action: ActionsTypes): InitStateProfileType => {
    switch (action.type) {
        case 'ADDPOST':

            return {
                ...state,
                posts: [...state.posts, {message: action.text, id: 3, likeCount: 10}]
            }
        case 'ADD_PROFILE_USER': {
            return {
                ...state,
                profileUser: {...state.profileUser, ...action.model}
            }
        }

        case 'GET_STATUS_USER': {

            return {
                ...state,
                statusAuthor: action.status
            }
        }
        default:
            return state
    }
}
export default profileReduser;

export const getProfileUser = (param: number | null) => {
    return (
        (dispatch) => {
            authorApi.getProfileUser(param)
                .then(response => {
                    dispatch(addProfileUser(response))
                })
        })
}
export const getStatusAuthor = (param: number | null) => {
    return (
        (dispatch) => {
            debugger
            authorApi.getStatusAuthor(param)
                .then(response => {
                    dispatch(getStatus(response))
                })
        })
}
export const setStatusAuthor = (status: string) => (dispatch) => {
    debugger
    authorApi.setStatusAuthor(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getStatus(status))
            }
        })
}


export type postsType =
    {
        message: string
        id: number
        likeCount: number
    }

type addPostType = ReturnType<typeof addPost>
type addProfileUserType = ReturnType<typeof addProfileUser>
type getStatusType = ReturnType<typeof getStatus>

type ActionsTypes =
    | addPostType
    | addProfileUserType
    | getStatusType