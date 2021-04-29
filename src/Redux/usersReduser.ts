import React from 'react';

type locationType = {
    country: string
    city: string
}

export type userDateType = {
    name: string
    id: number
    location: locationType,
    ava: string
    message: string
    statusButton: boolean
};

export type initialStateUsersType = {
    users: Array<userDateType>
}

export type FollowType = {
    type: 'FOLLOW'
    userId: number
    statusButton: boolean
}
export type UnFollowType = {
    type: 'UNFOLLOW'
    userId: number
    statusButton: boolean
}
export type SetUserType = {
    type: 'SETUSER'
    users: Array<userDateType>
}


export type ActionUserType = FollowType | UnFollowType | SetUserType

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSER = 'SETUSER';

export const FollowUserActionCreater = (userId: number) => ({type: FOLLOW, userId});
export const UnfollowUserActionCreater = (userId: number) => ({type: UNFOLLOW, userId});
export const SetUserActionCreater = (users: Array<userDateType>) => ({type: SETUSER, users});

let initialState = {
    users: []
}

const usersReduser = (state: initialStateUsersType = initialState, action: ActionUserType): initialStateUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, statusButton: true}
                    }
                    else{
                        return u
                    }
                })
            }
        case UNFOLLOW:
            return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, statusButton: false}
                } else {
                    return u
                }
            })
        }
        case SETUSER:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export default usersReduser;

