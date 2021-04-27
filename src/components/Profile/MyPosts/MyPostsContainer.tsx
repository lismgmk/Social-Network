import React from "react";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/Store";



 let MapStateToProps = (state : RootStateType) => {
     return {
         profilePage: state.profilePage,
         newPostText: state.profilePage.newPostText,
         photoPage: state.photoPage
     }
 }

let MapDispatchToProps = (dispatch) => {
     return {
         addPost: () => {dispatch(addPostActionCreater())},
         onPostChangeValue: (text: string) => {dispatch(updateNewPostTextActionCreater(text))}
     }
 }


const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);
 export default MyPostsContainer
