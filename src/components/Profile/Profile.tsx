import React from "react";

import s from "./Profile.module.css";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {getProfileUserType} from "../../Types/types";


export function Profile(props: ProfileType) {

    return (
        <div className={s.profile}>
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
    profileUser: getProfileUserType | null
    statusAuthor: string
    setStatusAuthor: (param: string) => void
}