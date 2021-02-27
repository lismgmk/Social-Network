import s from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";


export const Dialog = function (props) {
    let path = `/message/${props.id}`;



    return (
        <div className={s.dialogsItem}>
            <NavLink to={path} className={s.dialog}>
                {props.name}
            </NavLink>
        </div>
    )
}