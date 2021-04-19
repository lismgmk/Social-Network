import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export function MyPosts(props) {

    let postsElements =
        props.post.map(p => <Post
            message={p.message}
            likeCount={p.likeCount}
        />);

    let newPostElement: React.RefObject<any> = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text)
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
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

