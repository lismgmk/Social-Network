import React from "react";
import s from './Users.module.css'
import user from '../../images/user.svg'
import {NavLink} from "react-router-dom";
import {getUserItemsType} from "../../Types/types";
import {PaginationWrapper} from "../Pagination/PaginationWrapper";
import {useDispatch} from "react-redux";
import {setPageSize} from "../../Redux/usersReduser";

type UsersPropstype = {
    totalCount: number
    pageSize: number
    clickActionPage: (p: number) => void
    users: Array<getUserItemsType>
    unFollow: (p: number) => void
    follow: (p: number) => void
    setUserPageCount: (p: number) => void
    actionPage: number
    followArrButton: Array<number>
}

const Users: React.FC<UsersPropstype> = (props) => {

    const {
        totalCount,
        pageSize,
        clickActionPage,
        users,
        unFollow,
        follow,
        actionPage,
        followArrButton,
        setUserPageCount
    } = props


    return (

        <div className={s.container}>
            <PaginationWrapper
                cardPacksTotalCount={totalCount}
                currentPage={actionPage}
                pageCount={pageSize}
                setPackPageCount={setUserPageCount}
                setPackPage={clickActionPage}
            />
            {users.map(i =>
                <div
                    key={i.id} className={s.box}>
                    <div className={s.ava}>
                        <NavLink to={"/profile/" + i.id} activeClassName={s.activeLink}>
                            <img src={i.photos.small === null ? user : i.photos.small}/>
                        </NavLink>
                        {
                            i.followed ?
                                <button
                                    disabled={followArrButton.some((u) => u == i.id)}
                                    onClick={() => {
                                        unFollow(i.id)
                                    }}
                                >
                                    UNFollow
                                </button> :
                                <button
                                    disabled={followArrButton.some((u) => u == i.id)}
                                    onClick={() => {
                                        follow(i.id)
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


        </div>
    )
}


export default Users;