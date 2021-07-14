import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

import {getProfileUserType} from "../../Api/api";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export function Profile(props: ProfileType) {

    return (
        <div className={s.profile}>
            <div>{props.profileUser.fullName}</div>

            <div>{props.profileUser.lookingForAJob ? 'loooking for a job' : 'jobing'} </div>
            <ProfileInfo
                profileUser={props.profileUser}
                statusAuthor={props.statusAuthor}
                setStatusAuthor={props.setStatusAuthor}
            />
            <MyPostsContainer/>
        </div>
    )
}


export type ProfileType = {
    profileUser: getProfileUserType
    statusAuthor: string
    setStatusAuthor: (param: string) => void
}