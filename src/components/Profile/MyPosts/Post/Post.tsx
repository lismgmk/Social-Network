import React from "react";
import s from './Post.module.css';



export function Post(props) {
    debugger
    return (
        <div className={s.item}>
            {props.message}
            {props.likeCount}
        </div>
    )
}