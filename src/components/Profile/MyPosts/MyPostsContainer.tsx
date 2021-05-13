import React from "react";
import {
    addPost,
    InitStateProfileType,
    updateNewPostText
} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";



type MapStateToPropsType = {
    profilePage: InitStateProfileType
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType

let MapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}




const MyPostsContainer = connect(MapStateToProps, {
    addPost,
    updateNewPostText})(MyPosts);
export default MyPostsContainer
