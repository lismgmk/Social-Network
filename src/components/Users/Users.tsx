import React from "react";
import s from './Users.module.css'
import user from '../../images/user.png'
import {userDateType} from "../../Redux/usersReduser";
import Preloader from "../elseElements/Preloader";


type UsersPropstype = {
    totalCount: number
    pageSize: number
    clickActionPage: (p: number) => void
    users: Array<userDateType>
    unFollow: (p: number) => void
    follow: (p: number) => void
    actionPage: number

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


            {props.users.map(i => <div key={i.id} className={s.box}>
                    <div className={s.ava}>
                        <img src={i.photos.small === null ? user : i.photos.small}/>
                        <button
                            onClick={() => {
                                i.statusButton ?
                                    props.unFollow(i.id) :
                                    props.follow(i.id)
                            }}
                        >{i.statusButton ? 'Follow' : 'Unfollow'}</button>
                    </div>
                    <div className={s.textArea}>
                        <div className={s.nameMessageArea}>
                            <div>{i.name}</div>
                            <div>{i.message}</div>
                        </div>

                    </div>
                </div>
            )}
            <button className={s.button}>Show more</button>
        </div>


    )
}


export default Users;