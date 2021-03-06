import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

export function Profile(props) {
    debugger
    return (
        <div className={s.profile}>

            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    )
}

