import React from "react";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../Redux/profileReduser";
import {MyPosts} from "./MyPosts";


export function MyPostsContainer(props) {

    let state = props.store.getState().profilePage

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    };

    let onPostChangeValue = (text) => {
        props.store.dispatch(updateNewPostTextActionCreater(text))
    }

    return (
        <div>

            <MyPosts
                newPostText={state.newPostText}
                onPostChange={onPostChangeValue}
                addPost={addPost}
                post={state.posts}
            />
        </div>
    )
}

