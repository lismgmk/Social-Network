import React from "react";
import s from './Nav.module.css'

export function Nav() {
    return (
        <div className={s.nav}>
            <nav>
                <ul>
                    <li><a>Profile</a></li>
                    <li><a>Message</a></li>
                    <li><a>News</a></li>
                    <li><a>Music</a></li>
                    <li><a>Setting</a></li>
                </ul>
            </nav>
        </div>
    )
}