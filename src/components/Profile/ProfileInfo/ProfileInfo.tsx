import s from "./ProfileInfo.module.css";
import React from "react";
import user from '../../../images/user.png'
import {ProfileStatus} from "./ProfileStatus";
import {setStatusAuthor} from "../../../Redux/profile-reducer";
import {ProfileType} from "../Profile";


export function ProfileInfo(props: ProfileType) {

    return (
        <div className={s.profileInfo}>
            <div>
                <div><img src={`${props.profileUser.photos?.large ? props.profileUser.photos.small : user}`}/></div>
            <div>{props.profileUser.fullName}</div>
            <div>{props.profileUser.contacts?.github}</div>
            <div>{props.profileUser.lookingForAJobDescription}</div>
            </div>
            <div>
               <ProfileStatus
                   statusAuthor={props.statusAuthor}
                   setStatusAuthor={props.setStatusAuthor}
               />
            </div>
        </div>
    )
}