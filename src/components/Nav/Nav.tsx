import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";


export function Nav() {
    return (
        <nav className={s.nav}>


            <div className={s.item}>
                <NavLink to={PATH.SOCIAL_PROFILE} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={PATH.SOCIAL_MESSAGE} activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.SOCIAL_USERS} activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.SOCIAL_LOGIN} activeClassName={s.activeLink}>Login</NavLink>
            </div>


        </nav>
    )
}

