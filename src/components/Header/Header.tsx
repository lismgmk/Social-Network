import React from "react";
import s from './Header.module.css'
import {MapStateDispatchLogType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import {PATH} from "../../App";
import {Redirect, Switch} from "react-router";

export function Header(props : MapStateDispatchLogType) {
    return (
        <div className={s.header}>
            <header>
                {props.isLog ?
                    <div>
                        <div>{props.login}</div>
                        <div>{props.email}</div>
                        <div>{props.idAuthor}</div>
                    </div>
                    :
                    <NavLink to={PATH.SOCIAL_LOGIN}>Login</NavLink>
                } {props.isLog &&
                <div>
                    <Button variant="contained"
                            color="secondary"
                            type="button"
                            onClick={()=>{
                                props.logOutAuthor()

                            }}>Log Out
                    </Button>
                    <Switch>
                        <Redirect from={PATH.SOCIAL_404} to={PATH.SOCIAL_PROFILE}/>
                    </Switch>
                </div>
                }
                {!props.isLog &&
                <div>
                    <Switch>
                        <Redirect from={PATH.SOCIAL_PROFILE} to={PATH.SOCIAL_LOGIN}/>
                    </Switch>
                </div>
                }
            </header>
        </div>
    )
}