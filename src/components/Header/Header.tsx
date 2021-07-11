import React from "react";
import s from './Header.module.css'
import {MapStateDispatchLogType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";

export function Header(props : MapStateDispatchLogType) {



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

                {props.isLog && <Button variant="contained"
                        color="secondary"
                        type="button"
                        onClick={()=>{props.logOutAuthor()}}>Log Out
                </Button>}
            </header>
        </div>
    )
}