import React from 'react';


type postsType =
    {message: string
    id: number
    likeCount: number};

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

let state : RootStateType = {
    profilePage: {
        posts:  [
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
};



type addPostType = (text: string) => void

 export let addPost : addPostType = () => {
     let newPosts = {message: state.profilePage.newPostText, id: 3, likeCount: 10};
     state.profilePage.posts.push(newPosts);
     state.profilePage.newPostText = '';
     rerenderEntireTree(state)
 };

type textAreaChangeType = (text: string) => void

 export let updateNewPostText : textAreaChangeType= (newText) => {
    state.profilePage.newPostText = newText;
     rerenderEntireTree(state)
 };

export let addDialog = () => {
    let newDialog = { name: 'Sergey E', id: 7 };
    let newMessage = {message: state.dialogsPage.newDialogText, id: 7};
    state.dialogsPage.dialogs.push(newDialog);
    state.dialogsPage.message.push(newMessage);
    state.dialogsPage.newDialogText = '';
    rerenderEntireTree(state)
}

type updateNewDialogTextType = (text: string) => void

export let updateNewDialogText : updateNewDialogTextType = (newDialogText) => {
    state.dialogsPage.newDialogText = newDialogText;
    // rerenderEntireTree(state)
    rerenderEntireTree(state)
}
debugger
let rerenderEntireTree = (i) => {
    alert('5')
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;