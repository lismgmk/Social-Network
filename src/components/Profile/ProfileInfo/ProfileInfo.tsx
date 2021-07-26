import s from "./ProfileInfo.module.css";
import React from "react";
import user from '../../../images/user.svg'
import {ProfileType} from "../Profile";
import {ProfileStatusWithHook} from "./ProfileStatusWithHook";


export function ProfileInfo (props: ProfileType) {

    return (
        <div className={s.profileInfo}>
            <div>
                <div><img src={`${props.profileUser && props.profileUser.photos?.large ? props.profileUser.photos.small : user}`}/></div>
            <div>{props.profileUser && props.profileUser.fullName}</div>
            <div>{props.profileUser && props.profileUser.contacts?.github}</div>
            <div>{props.profileUser && props.profileUser.lookingForAJobDescription}</div>
            </div>
            <div>
               <ProfileStatusWithHook
                   // ProfileStatus
                   statusAuthor={props.statusAuthor}
                   setStatusAuthor={props.setStatusAuthor}
               />
            </div>
        </div>
    )
}