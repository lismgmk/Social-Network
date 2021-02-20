import React from "react";
import s from './Header.module.css'

export function Header() {
    return (
        <div className={s.header}>
            <header>
                <img
                    src='https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg'/>
                <h1>Hello</h1>
            </header>
        </div>
    )
}