import React from "react";
import {MapStateDispatchType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import user from '../../images/user.png'


class Users extends React.Component <MapStateDispatchType> {

    // constructor(props ) {
    //     super(props);
    // }

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUser(response.data.items)
            })
    };

    render() {
        return (
            <div className={s.container}>
                {this.props.users.map(i => <div key={i.id} className={s.box}>
                        <div className={s.ava}>
                            <img src={user}/>
                            <button
                                onClick={() => {
                                    i.statusButton ?
                                        this.props.unFollow(i.id) :
                                        this.props.follow(i.id)
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

}

export default Users;