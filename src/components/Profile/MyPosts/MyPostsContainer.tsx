import React from "react";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../Redux/profileReduser";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StateContext";


export function MyPostsContainer() {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().profilePage

                let addPost = () => {
                    store.dispatch(addPostActionCreater());
                };

                let onPostChangeValue = (text) => {
                    store.dispatch(updateNewPostTextActionCreater(text))
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
        }

    </StoreContext.Consumer>
}

