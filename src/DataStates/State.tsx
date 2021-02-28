import React from 'react';
import rerenderEntireTree from "../render";
debugger

type dataPostsType =
    {message: string
    id?: number};

type dialogDataType = {
    name: string
    id?: number
};

type messageDataType = {
    message: string
    r?: number | null
};

export type addPostType = (text: string) => void | dataPostsType


let state = {
    dataPosts:  [
        {message: 'Hello', id: 1},
        {message: 'Hi', id: 2}
    ] as Array<dataPostsType>,

    dialogData: [
        {name: 'Andrey', id: 1},
        {name: 'Vova', id: 2}
        ] as Array<dialogDataType>,

    messageData: [
        {message: 'Hi hello', r: 1},
        {message: 'Good morning', r: 2}
    ] as Array<messageDataType>
}

 export let addPost : addPostType = (text) => {
     let newPosts = {message: text, id: 3};
     state.dataPosts.push(newPosts);
     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
     rerenderEntireTree(state)
 }

export default state;