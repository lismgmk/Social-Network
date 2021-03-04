import s from "../Dialogs.module.css";
import React from "react";


export const Message = function (props) {



    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}