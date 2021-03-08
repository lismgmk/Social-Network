import React from 'react';

const ADDPOST = 'ADDPOST';
const UPDATENEWPOSTTEXT = 'UPDATENEWPOSTTEXT';

export const addPostActionCreater = () => ({type: ADDPOST});
export const updateNewPostTextActionCreater = (text) => ({type: UPDATENEWPOSTTEXT, newText: text});




const profileReduser = (state, action) => {
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

