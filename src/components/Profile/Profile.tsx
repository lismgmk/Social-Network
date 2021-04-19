import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";



export function Profile(props) {

    return (
        <div className={s.profile}>

            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    )
}

