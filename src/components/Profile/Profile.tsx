import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {MapStateDispatchType} from "./ProfileContainer";


export function Profile(props: MapStateDispatchType) {

    return (
        <div className={s.profile}>
            <div>{props.fullNameUser}</div>

            <div>{props.lookingForAJobUser ? 'loooking for a job' : 'jobing'} </div>
            <ProfileInfo photosUser={props.photosUser}/>
            <MyPostsContainer/>
        </div>
    )
}

