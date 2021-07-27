import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {getProfileUserType} from "../../Types/types";


export const Profile: React.FC<ProfileType> = (props) => {
    const {profileUser, statusAuthor, setStatusAuthor} = props
    return (
        <div className={s.profile}>
            <ProfileInfo
                profileUser={profileUser}
                statusAuthor={statusAuthor}
                setStatusAuthor={setStatusAuthor}
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