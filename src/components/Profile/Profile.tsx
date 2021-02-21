import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

type ProfileProps = {
    title: string
}

export function Profile(props: ProfileProps) {
    return (
        <div >
            <div>{props.title}</div>
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

