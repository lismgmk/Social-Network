import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string
    likeCount: number
}


export function Post(props: PostType) {

    return (
        <div className={s.item}>
            {props.message}
            {props.likeCount}
        </div>
    )
}