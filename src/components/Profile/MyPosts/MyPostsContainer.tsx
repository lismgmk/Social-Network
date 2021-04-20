import React from "react";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../Redux/profileReduser";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";



 let MapStateToProps = (state) => {
     return {
         profilePage: state.profilePage,
         newPostText: state.profilePage.newPostText
     }
 }

let MapDispatchToProps = (dispatch) => {
     debugger
     return {
         addPost: () => {dispatch(addPostActionCreater())},
         onPostChangeValue: (text) => {dispatch(updateNewPostTextActionCreater(text))}
     }
 }


const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

 export default MyPostsContainer
