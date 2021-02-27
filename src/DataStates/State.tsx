import React from 'react';
import rerenderEntireTree from "../render";

let state = {
    dataPosts: [
        {message: 'Hello', id: 1},
        {message: 'Hi', id: 2}
    ],

    dialogData: [
        {name: 'Andrey', id: 1},
        {name: 'Vova', id: 2}
        ],

    messageData: [{message: 'Hi hello', r: 1},
        {message: 'Good morning', r: 2}]
};

export let addPost = (text) => {
    let newPosts = {message: text, id: 3};
    state.dataPosts.push(newPosts);
    rerenderEntireTree(state);
}

export default state;