import React from "react";
import s from './Post.module.css';

type PostProp = {
    message: string
}

export function Post(props: PostProp) {
    return (
        <div className={s.item}>
            {props.message}
        </div>
    )
}