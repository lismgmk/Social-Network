import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";


export function Nav() {
    return (
        <nav className={s.nav}>


            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/message' activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/login' activeClassName={s.activeLink}>Login</NavLink>
            </div>


        </nav>
    )
}

