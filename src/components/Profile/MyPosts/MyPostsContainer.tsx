import React from "react";
import {
    addPostActionCreater,
    InitStateProfileType,
    updateNewPostTextActionCreater
} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    profilePage: InitStateProfileType
}

type MapDispatchToPropsType = {
    addPost: () => void
    onPostChangeValue: (text: string) => void
}

export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType

let MapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

let MapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater())
        },
        onPostChangeValue: (text: string) => {
            dispatch(updateNewPostTextActionCreater(text))
        }
    }
}


const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);
export default MyPostsContainer
