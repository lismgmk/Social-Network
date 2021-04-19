import React from 'react';
import profileReduser, {addPostActionCreater} from "./profileReduser"
import dialogsReduser from "./dialogsReduser";

type postsType =
    {
        message: string
        id: number
        likeCount: number
    };

type dialogsType = {
    name: string
    id: number
};

type messageType = {
    message: string
    id: number
};
type profilePageType = {
    posts: Array<postsType>
    newPostText: string
}

type dialogsMessageType = {
    dialogs: Array<dialogsType>
    message: Array<messageType>
    newDialogText: string
}

type imagesType = {
    id: number
    src: string
    active: boolean
}

type socialNetType = {
    id: number
    name: string
    path: string
}

type photoPageType = {
    socialNet: Array<socialNetType>
    images: Array<imagesType>
}

type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsMessageType
    photoPage: photoPageType
}

type RootStoreType = {
    _state : RootStateType
    _callSubscriber: (any) => void
    subscribe: (any) => void
    getState: () => void
    dispatch: (any) => void
}

let store: RootStoreType = {

    _state: {
        photoPage: {
          images: [
              {id: 1, src: 'https://sun9-24.userapi.com/impg/ezkRA9_HeR3xzXTYMMaPWJ9BXSGtic5kONHo5w/Y0DqrLOlYN8.jpg?size=1080x1080&quality=96&sign=c7ac78a275a038536b03fc46ae9d9983&type=album', active: true},
              {id: 2, src: 'https://sun9-28.userapi.com/impg/wDzvBSm4cjsD37RBExA_rW-vWjs70fYUeyDudg/KQfI1sMzzpk.jpg?size=1280x960&quality=96&sign=25d98bcfa4059a4e13b2102ebb2acf1f&type=album', active: true},
              {id: 3, src: 'https://sun9-58.userapi.com/impg/KTZftXHYTUpHQ6hLS7djlM0ch3fcSw5CHenuKA/f6rgtsp8TyY.jpg?size=1280x960&quality=96&sign=148823426e63f80da476a06943544c75&type=album', active: true},
              {id: 4, src: 'https://sun9-56.userapi.com/impg/hRUOQ-4jg-YheyxEoHaFI98qraMc-wopFxWzTw/g7WVf9SkCQo.jpg?size=1080x1080&quality=96&sign=c2350eb252c0349495bb2fd43c29a55a&type=album', active: true},
              {id: 5, src: 'https://sun9-54.userapi.com/impg/OmaqsQZN5VGlp9TAFEuKnRmf5vj1FvHPXECjkQ/qTUa1HwQbtc.jpg?size=1080x1080&quality=96&sign=3e93d63970a79da03cd7ca835bbe24c0&type=album', active: true},
              {id: 6, src: 'https://sun9-20.userapi.com/impg/c857332/v857332167/170ceb/Za396_OPzfY.jpg?size=1080x1080&quality=96&sign=decd952151fa5232162bea6993fbdb62&type=album', active: true},
          ],
            socialNet: [
                {id: 1, name: 'Instagram', path: '../../public/instagram.svg'},
                {id: 2, name: 'Vkontakte', path: '../../public/vk.svg'},
                {id: 3, name: 'Faseboock', path: '../../public/facebook.svg'}
            ]
        },
        profilePage: {
            posts: [
                {message: 'Hello', id: 1, likeCount: 12},
                {message: 'Hi', id: 2, likeCount: 1},
                {message: 'Very', id: 3, likeCount: 5},
                {message: 'Good', id: 4, likeCount: 6},
                {message: 'Bye', id: 5, likeCount: 10},
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {name: 'Andrey', id: 1},
                {name: 'Vova', id: 2},
                {name: 'Igor', id: 3},
                {name: 'Sergey', id: 4},
                {name: 'Vadik', id: 5},
                {name: 'Lis', id: 6},
            ],

            message: [
                {message: 'Hi hello', id: 1},
                {message: 'Good morning', id: 2},
                {message: 'Game Over', id: 3},
                {message: 'Bla-bla', id: 4},
                {message: 'vou', id: 5},
                {message: 'Good', id: 6}
            ],
            newDialogText: ''
        }
    },

    _callSubscriber () {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState () {
        return this._state
    },


    dispatch (action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

        this._callSubscriber(this.getState);
    }
}


export default store;

// window.store = store