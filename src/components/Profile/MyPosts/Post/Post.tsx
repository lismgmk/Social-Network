import React from "react";
import s from './Post.module.css'

export function Post(props) {
    return (
        <div className={s.item}>
            {props.message}
        </div>
    )
}