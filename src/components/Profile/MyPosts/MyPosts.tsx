import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export function MyPosts(props) {

    let state = props.profilePage

    let postsElements =
        state.posts.map(p => <Post
            message={p.message}
            likeCount={p.likeCount}
        />);

    let newPostElement: React.RefObject<any> = React.createRef();

    let onPostChange = () => {

        let text = newPostElement.current.value;
        console.log(text)
        props.onPostChangeValue(text)
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
                              value={props.newPostText}
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

