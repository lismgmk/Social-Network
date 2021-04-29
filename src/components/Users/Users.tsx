import React from "react";
import {MapStateDispatchType} from "./UsersContainer";
import s from './Users.module.css'


function Users(props: MapStateDispatchType) {
debugger
    {
        if (props.users.length === 0) {
            props.setUser([
                {
                    name: 'Vova',
                    id: 1,
                    location: {country: 'belarus', city: 'Minsk'},
                    ava: 'https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg',
                    message: 'I am looking for your',
                    statusButton: true
                },
                {
                    name: 'Igor',
                    id: 2,
                    location: {country: 'belarus', city: 'Minsk'},
                    ava: 'https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg',
                    message: 'I am looking for your',
                    statusButton: false
                },
                {
                    name: 'Sergey',
                    id: 3,
                    location: {country: 'belarus', city: 'Minsk'},
                    ava: 'https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg',
                    message: 'I am looking for your',
                    statusButton: true
                }
            ])
        }
    }

    const createUsers =
        props.users.map(i => {
            return (
                <div key = {i.id} className={s.box}>
                    <div className={s.ava}>
                        <img src={i.ava}/>
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
                        <div className={s.countruCityArea}>
                            <div>{i.location.country}</div>
                            <div>{i.location.city}</div>
                        </div>
                    </div>
                </div>
            )
        })
    return (

        <div className={s.container}>
            {createUsers}
            <button className={s.button}>Show more</button>
        </div>

    )
}

export default Users;