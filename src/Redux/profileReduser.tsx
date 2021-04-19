import React from 'react';

const ADDPOST = 'ADDPOST';
const UPDATENEWPOSTTEXT = 'UPDATENEWPOSTTEXT';

export const addPostActionCreater = () => ({type: ADDPOST});
export const updateNewPostTextActionCreater = (text) => ({type: UPDATENEWPOSTTEXT, newText: text});

let initialState = {
    posts: [
        {message: 'Hello', id: 1, likeCount: 12},
        {message: 'Hi', id: 2, likeCount: 1},
        {message: 'Very', id: 3, likeCount: 5},
        {message: 'Good', id: 4, likeCount: 6},
        {message: 'Bye', id: 5, likeCount: 10},
    ],
    newPostText: ''
}


const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADDPOST:
            let newPosts = {message: state.newPostText, id: 3, likeCount: 10};
            state.posts.push(newPosts);
            state.newPostText = '';
            return state
        case UPDATENEWPOSTTEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export default profileReduser;

