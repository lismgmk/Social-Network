import s from "../Dialogs.module.css";
import React from "react";


export const Message = function (props) {

    debugger

    return (
        <div className={s.message}>{props.message[0]}</div>
    )
}