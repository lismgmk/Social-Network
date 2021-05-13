import s from "./ProfileInfo.module.css";
import React from "react";
import user from '../../../images/user.png'


export function ProfileInfo(props: {photosUser:string}) {

    return (
        <div className={s.profileInfo}>
            <div>
                <div><img src={`${props.photosUser ? props.photosUser : user}`}/></div>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}