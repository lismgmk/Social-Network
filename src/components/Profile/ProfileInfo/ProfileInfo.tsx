import s from "./ProfileInfo.module.css";
import React from "react";
import user from '../../../images/user.svg'
import {ProfileType} from "../Profile";
import {ProfileStatusWithHook} from "./ProfileStatusWithHook";


export const ProfileInfo: React.FC<ProfileType>  = (props) => {
    const {profileUser, statusAuthor, setStatusAuthor} = props
    return (
            <div className={s.profileInfo}>
                <div>
                    <div><img
                        src={`${profileUser && profileUser.photos?.large ? profileUser.photos.small : user}`}/>
                    </div>
                    <div>{profileUser && profileUser.fullName}</div>
                    <div>{profileUser && profileUser.contacts?.github}</div>
                    <div>{profileUser && profileUser.lookingForAJobDescription}</div>
                </div>
                <div>
                    <ProfileStatusWithHook
                        statusAuthor={statusAuthor}
                        setStatusAuthor={setStatusAuthor}
                    />
                </div>
            </div>
        )

}