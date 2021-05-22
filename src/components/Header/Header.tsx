import React from "react";
import s from './Header.module.css'
import {MapStateToPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";

export function Header(props : MapStateToPropsType) {



    return (
        <div className={s.header}>
            <header>
                {props.isLog ?
                    <div>
                        <div>{props.login}</div>
                        <div>{props.email}</div>
                        <div>{props.idAuthor}</div>
                        <h1>Hello</h1>
                    </div>
                    :
                    <NavLink to='/login'>Login</NavLink>}
            </header>
        </div>
    )
}