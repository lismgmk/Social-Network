import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../Redux/profileReduser";


export function MyPosts(props) {

    let postsElements =
        props.profilePage.posts.map(p => <Post
            message={p.message}
            likeCount={p.likeCount}
        />);


    let newPostElement: any = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreater());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        props.dispatch(updateNewPostTextActionCreater(text))
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
                    <button onClick={addPost}>Add post</button>

                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

