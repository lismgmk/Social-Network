import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {MapStateDispatchType} from "./ProfileContainer";
import {Redirect} from "react-router";

// photosUser: string
// fullNameUser: string
// lookingForAJobUser: boolean
// log: boolean

export function Profile({
                            photosUser = '',
                            fullNameUser = 'Lis',
                            lookingForAJobUser = true,
                            log = true
                        }: MapStateDispatchType) {
    if (log) {
        return (
            <div className={s.profile}>
            <div>{fullNameUser}</div>

            <div>{lookingForAJobUser ? 'loooking for a job' : 'jobing'} </div>
            <ProfileInfo photosUser={photosUser}/>
            <MyPostsContainer/>
        </div>
    )
} else {
    return <Redirect to={'/login'} />

}

}
