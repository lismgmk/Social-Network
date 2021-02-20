import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
            <div className={s.main}>
                <div>
                    <img src='https://wallpaperset.com/w/full/9/c/9/327497.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts/>

            </div>
    )
}

