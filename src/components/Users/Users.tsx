import React from "react";
import s from './Users.module.css'
import user from '../../images/user.svg'
import {NavLink} from "react-router-dom";
import {getUserItemsType} from "../../Types/types";



type UsersPropstype = {
    totalCount: number
    pageSize: number
    clickActionPage: (p: number) => void
    users: Array<getUserItemsType>
    unFollow: (p: number) => void
    follow: (p: number) => void
    actionPage: number
    isdisabledButton: (followBoolButton: boolean, id: number) => void
    followArrButton: Array<number>
}

const Users = (props: UsersPropstype) => {
    let pagesCount = Math.ceil(props.totalCount / (props.pageSize * 100))


    let arr: number[] = []
    for (let i = 1; i < pagesCount; i++) {
        arr.push(i)
    }

    return (

        <div className={s.container}>


            <div className={s.boxes}>
                {arr.map(p => {
                    return (
                        <div
                            className={`${p === props.actionPage ? s.activePage : ''} ${s.pageNumberStyle}`}
                            onClick={(e) => {
                                props.clickActionPage(p)
                            }}
                        >{p}</div>
                    )
                })}
            </div>


            {props.users.map(i =>

                <div
                key={i.id} className={s.box}>
                    <div className={s.ava}>
                        <NavLink to={"/profile/" + i.id} activeClassName={s.activeLink}>
                            <img src={i.photos.small === null ? user : i.photos.small}/>
                        </NavLink>
                        {
                            i.followed ?
                                <button
                                    disabled={props.followArrButton.some((u) => u == i.id)}
                                    onClick={() => {
                                        props.unFollow(i.id)
                                    }}
                                >
                                    UNFollow
                                </button> :
                                <button
                                    disabled={props.followArrButton.some((u) => u == i.id)}
                                    onClick={() => {
                                        props.follow(i.id)
                                    }}
                                >
                                    follow
                                </button>
                        }

                    </div>
                    <div className={s.textArea}>
                        <div className={s.nameMessageArea}>
                            <div>{i.name}</div>
                            <div>{i.status}</div>
                        </div>

                    </div>
                </div>
            )}
            <button className={s.button}>Show more</button>
        </div>
    )
}


export default Users;