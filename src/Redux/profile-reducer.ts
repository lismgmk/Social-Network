import {initialStateType} from "./dialogsReduser";

const ADDPOST = 'ADDPOST';
const UPDATENEWPOSTTEXT = 'UPDATENEWPOSTTEXT';
const ADD_PHOTOS_USER = 'ADD_PHOTOS_USER';
const ADD_FULL_NAME_USER = 'ADD_FULL_NAME_USER';
const ADD_LOOKING_FOR_A_JOB_USER = 'ADD_LOOKING_FOR_A_JOB_USER';



export const addPost = () => ({type: ADDPOST}as const);
type addPostType = ReturnType<typeof addPost>

export const updateNewPostText = (text: string) => ({type: UPDATENEWPOSTTEXT, text}as const);
type updateNewPostTextType = ReturnType<typeof updateNewPostText>

export const addPhotosUser = (photo: string) => ({type: ADD_PHOTOS_USER, photo}as const);
type addPhotosUserType = ReturnType<typeof addPhotosUser>

export const addFullNameUser = (name: string) => ({type: ADD_FULL_NAME_USER, name}as const);
type addFullNameUserType = ReturnType<typeof addFullNameUser>

export const addLookingForAJobUser = (job: boolean) => ({type: ADD_LOOKING_FOR_A_JOB_USER, job}as const);
type addLookingForAJobUserType = ReturnType<typeof addLookingForAJobUser>

type postsType =
    {
        message: string
        id: number
        likeCount: number
    }


type ActionsTypes = addPostType | updateNewPostTextType | addPhotosUserType | addFullNameUserType | addLookingForAJobUserType
let initialState: InitStateProfileType = {
    posts: [
        {message: 'Hello', id: 1, likeCount: 12},
        {message: 'Hi', id: 2, likeCount: 1},
        {message: 'Very', id: 3, likeCount: 5},
        {message: 'Good', id: 4, likeCount: 6},
        {message: 'Bye', id: 5, likeCount: 10},
    ],
    newPostText: '',
    photosUser: '',
    fullNameUser: '',
    lookingForAJobUser: false
}
export type InitStateProfileType = {
    posts: Array<postsType>
    newPostText: string
    photosUser: string
    fullNameUser: string
    lookingForAJobUser: boolean
}


const profileReduser = (state: InitStateProfileType = initialState, action: ActionsTypes): InitStateProfileType => {
    switch (action.type) {
        case ADDPOST:
            let newPosts = {message: state.newPostText, id: 3, likeCount: 10};
            let newStates : Array<postsType>= [...state.posts, newPosts]
            return {
                ...state,
                posts: newStates,
                newPostText: ''

            }
        case UPDATENEWPOSTTEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case ADD_PHOTOS_USER: {
            return {
                ...state,
                photosUser: action.photo
            }
        }
        case ADD_FULL_NAME_USER: {
            return {
                ...state,
                fullNameUser: action.name
            }
        }
        case ADD_LOOKING_FOR_A_JOB_USER: {
            return {
                ...state,
                lookingForAJobUser: action.job
            }
        }

        default:
            return state
    }
}

export default profileReduser;

