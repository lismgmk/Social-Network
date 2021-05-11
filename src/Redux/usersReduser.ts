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
    photos: {
        small: string
    }
};

export type initialStateUsersType = {
    users: Array<userDateType>
    totalCount: number
    pageSize: number
    actionPage: number
    isLoaded: boolean
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

export type SetTotalCountType = {
    type: 'SET_TOTAL_COUNT'
    totalCount: number
}

export type SetActionPageType = {
    type: 'SET_ACTION_PAGE'
    actionPage: number
}
export type SetLoadedType = {
    type: 'SET_LOADED'
    isLoaded: boolean
}


export type ActionUserType = FollowType | UnFollowType | SetUserType | SetTotalCountType | SetActionPageType | SetLoadedType

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSER = 'SETUSER';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_ACTION_PAGE = 'SET_ACTION_PAGE';
const SET_LOADED = 'SET_LOADED';



export const followUser = (userId: number) => ({type: FOLLOW, userId});
export const unfollowUser = (userId: number) => ({type: UNFOLLOW, userId});
export const setUser = (users: Array<userDateType>) => ({type: SETUSER, users});
export const setTotalCount = (count: number) => ({type: SET_TOTAL_COUNT, totalCount: count});
export const setActionPage = (page: number) => ({type: SET_ACTION_PAGE, actionPage: page});
export const setLoaded = (load: boolean) => ({type: SET_LOADED, isLoaded: load});

let initialState = {
    users: [],
    pageSize: 3,
    totalCount: 10,
    actionPage: 2,
    isLoaded: false
}

const usersReduser = (state: initialStateUsersType = initialState, action: ActionUserType): initialStateUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, statusButton: true}
                    } else {
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
                ...state, users: [ ...action.users]
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case SET_ACTION_PAGE:
            return {
                ...state, actionPage: action.actionPage
            }
        case SET_LOADED:
            return {
                ...state, isLoaded: action.isLoaded
            }
        default:
            return state
    }
}

export default usersReduser;

