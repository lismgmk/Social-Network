import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {MapStateDispatchType} from "./MyPostsContainer";

export function MyPosts(props: MapStateDispatchType) {

    let state = props.profilePage

    let postsElements =
        props.profilePage.posts.map(p => <Post
            message={p.message}
            likeCount={p.likeCount}
        />);

    let newPostElement: React.RefObject<any> = React.createRef();

    let onPostChange = () => {

        let text = newPostElement.current.value;
        console.log(text)
        props.updateNewPostText(text)
    }

    let onClockAddMessage = () => {
        props.addPost()
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.profilePage.newPostText}
                              placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={onClockAddMessage}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

