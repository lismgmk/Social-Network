import {authorApi, getProfileUserType, headerApi, userApi} from "../Api/api";

export const addPost = () => ({type: 'ADDPOST'} as const);
export const updateNewPostText = (text: string) => ({type: 'UPDATENEWPOSTTEXT', text} as const);
export const addProfileUser = (model: getProfileUserType) => ({type: 'ADD_PROFILE_USER', model} as const);
export const getStatus = (status: string) => ({type: 'GET_STATUS_USER', status} as const);


let initialState: InitStateProfileType = {
    posts: [
        {message: 'Hello', id: 1, likeCount: 12},
        {message: 'Hi', id: 2, likeCount: 1}
    ],
    newPostText: '',
    profileUser: {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: null,
        photos: null
    },
    statusAuthor: ''
}


const profileReduser = (state: InitStateProfileType = initialState, action: ActionsTypes): InitStateProfileType => {
    switch (action.type) {
        case 'ADDPOST':
            let newPosts = {message: state.newPostText, id: 3, likeCount: 10};
            let newStates: Array<postsType> = [...state.posts, newPosts]
            return {
                ...state,
                posts: newStates,
                newPostText: ''
            }
        case 'UPDATENEWPOSTTEXT': {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case 'ADD_PROFILE_USER': {
            return {
                ...state,
                profileUser: { ...state.profileUser, ...action.model}
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

export const getProfileUser = (param: string) => {
    return (
        (dispatch) => {
            authorApi.getProfileUser(param)
                .then(response => {
                    dispatch(addProfileUser(response))
                })
        })
}
export const getStatusAuthor = (param: string) => {
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
                    if(response.resultCode === 0){
                        dispatch(getStatus(status))
                    }
                })
        }

export type InitStateProfileType = {
    posts: Array<postsType>
    newPostText: string
    profileUser: getProfileUserType
    statusAuthor: string
}

type postsType =
    {
        message: string
        id: number
        likeCount: number
    }

type addPostType = ReturnType<typeof addPost>
type updateNewPostTextType = ReturnType<typeof updateNewPostText>
type addProfileUserType = ReturnType<typeof addProfileUser>
type getStatusType = ReturnType<typeof getStatus>

type ActionsTypes =
    | addPostType
    | updateNewPostTextType
    | addProfileUserType
    | getStatusType