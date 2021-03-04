import React from 'react';
import rerenderEntireTree from "../render";

type dataPostType =
    {message: string
    id: number};

type dialogDataType = {
    name: string
    id: number
    dialog: string
};

type messageDataType = {
    message: string
    id: number
};

type RootStateType = {
    dataPosts: Array<dataPostType>
    dialogData: Array<dialogDataType>
    messageData: Array<messageDataType>
}

let state : RootStateType = {
    dataPosts:  [
        {message: 'Hello', id: 1},
        {message: 'Hi', id: 2}
    ],
    dialogData: [
        {name: 'Andrey', id: 1, dialog: 'hi'},
        {name: 'Vova', id: 2, dialog: ''}
        ],

    messageData: [
        {message: 'Hi hello', id: 1},
        {message: 'Good morning', id: 2}
    ]
};

type addPostType = (text: string) => void

 export let addPost : addPostType = (text) => {
     let newPosts = {message: text, id: 3};
     state.dataPosts.push(newPosts);
     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
     rerenderEntireTree(state)
 };

type textAreaChangeType = (text: string) => void

 export let textAreaChange : textAreaChangeType= (textarea) => {
    state.dialogData[0].dialog = textarea;
    console.log(state.dialogData)
 };

export let addDialog = (text) => {
    let newDialog = {message: text, id: 3};
    state.messageData.push(newDialog);
    rerenderEntireTree(state)
}

export default state;