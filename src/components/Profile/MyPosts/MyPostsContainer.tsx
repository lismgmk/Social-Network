import React from "react";
import {
    addPost,
    postsType,
} from "../../../Redux/profile-reducer";
import {MyPostsForm} from "./MyPostsForm";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";
import {reduxForm} from "redux-form";


let MapStateToPropsPosts = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePagePosts: state.profilePage.posts
    }
}


export function MyPosts(props: MapStateDispatchPostsType) {

    const postsElements =
        props.profilePagePosts.map(p => <Post
            message={p.message}
            likeCount={p.likeCount}
        />)

    const onAddPost = (value: myFormPostsType)=> {
        props.addPost(value.textarea)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
                <MyPostsFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}



export default connect(MapStateToPropsPosts, {addPost})(MyPosts)

let MyPostsFormRedux = reduxForm<myFormPostsType, {}>({
    form: 'myPostsForm'
})(MyPostsForm)


type MapDispatchToPropsType = {
    addPost: (val: string) => void
}
type MapStateToPropsType = {
    profilePagePosts: Array<postsType>
}

type MapStateDispatchPostsType = MapStateToPropsType & MapDispatchToPropsType


export type myFormPostsType = {
    textarea: string
}
