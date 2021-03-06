import React from 'react';

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

type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsMessageType
}

type RootStoreType = {
    _state : RootStateType
    addPost : (any) => void
    updateNewPostText :(text: string) => void
    addDialog :(any) => void
    updateNewDialogText : (text: string) => void
    subscribe: (any) => void
    _callSubscriber: (any) => void
    getState: () => void
}

let store: RootStoreType = {

    _state: {
        profilePage: {
            posts: [
                {message: 'Hello', id: 1, likeCount: 12},
                {message: 'Hi', id: 2, likeCount: 1},
                {message: 'Very', id: 3, likeCount: 5},
                {message: 'Good', id: 4, likeCount: 6},
                {message: 'Bye', id: 5, likeCount: 10},
            ],
            newPostText: 'This is life'
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
            newDialogText: 'Chick'
        }
    },

    getState () {
        debugger
        return this._state
    },

    addPost() {
        let newPosts = {message: this._state.profilePage.newPostText, id: 3, likeCount: 10};
        this._state.profilePage.posts.push(newPosts);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this.getState)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    addDialog() {
        let newDialog = {name: 'Sergey E', id: 7};
        let newMessage = {message: this._state.dialogsPage.newDialogText, id: 7};
        this._state.dialogsPage.dialogs.push(newDialog);
        this._state.dialogsPage.message.push(newMessage);
        this._state.dialogsPage.newDialogText = '';
        this._callSubscriber(this._state)
    },

    updateNewDialogText(newDialogText) {
        this._state.dialogsPage.newDialogText = newDialogText;
        this._callSubscriber(this._state)
    },

    _callSubscriber () {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }

}


export default store;

// window.store = store