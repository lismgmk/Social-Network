import React from "react";
import s from './Nav.module.css'

export function Nav() {
    return (
        <div className={s.nav}>
            <nav>
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href='/message'>Message</a></li>
                    <li><a href='/news'>News</a></li>
                    <li><a href='/music'>Music</a></li>
                    <li><a href='/setting'>Setting</a></li>
                </ul>
            </nav>
        </div>
    )
}

