const ADDPOST = 'ADDPOST';
const UPDATENEWPOSTTEXT = 'UPDATENEWPOSTTEXT';

export const addPostActionCreater = () => ({type: ADDPOST}as const);
type addPostType = ReturnType<typeof addPostActionCreater>

export const updateNewPostTextActionCreater = (text: string) => ({type: UPDATENEWPOSTTEXT, text}as const);
type updateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreater>

type postsType =
    {
        message: string
        id: number
        likeCount: number
    }


type ActionsTypes = addPostType | updateNewPostTextType
let initialState: InitStateType = {
    posts: [
        {message: 'Hello', id: 1, likeCount: 12},
        {message: 'Hi', id: 2, likeCount: 1},
        {message: 'Very', id: 3, likeCount: 5},
        {message: 'Good', id: 4, likeCount: 6},
        {message: 'Bye', id: 5, likeCount: 10},
    ],
    newPostText: ''
}
type InitStateType = {
    posts: Array<postsType>
    newPostText: string
}


const profileReduser = (state = initialState, action: ActionsTypes): InitStateType => {
    switch (action.type) {
        case ADDPOST:
            let newPosts = {message: state.newPostText, id: 3, likeCount: 10};
            let newStates : Array<postsType>= [...state.posts, newPosts]
            // state.newPostText = '';
            // return state
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

        default:
            return state
    }
}

export default profileReduser;

