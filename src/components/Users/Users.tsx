import React from "react";
import {MapStateDispatchType} from "./UsersContainer";
import s from './Users.module.css'


function Users(props: MapStateDispatchType) {
// const [follow, setFollow] = useState(true)
//     const followStatus = ()=>{
//         follow && setFollow(!follow)
//         !follow && setFollow(!follow)
//     }

    const createUsers =
        props.users.userDate.map(i => {
            return (
                    <div className={s.box}>
                        <div className={s.ava}>
                            <img src={i.ava}/>
                            <button
                                // onClick={followStatus}
                            >{i.follow}</button>
                        </div>
                        <div className={s.textArea}>
                            <div className={s.nameMessageArea}>
                                <div>{i.name}</div>
                                    <div>{i.message}</div>
                            </div>
                            <div className={s.countruCityArea}>
                                <div>{i.country}</div>
                                <div>{i.city}</div>
                            </div>
                        </div>
                    </div>



            )
        })


    return (

        <div className={s.container}>

            {createUsers}

            <button className={s.button} onClick={() => props.addUser()}>Show more</button>
        </div>

    )
}

export default Users;