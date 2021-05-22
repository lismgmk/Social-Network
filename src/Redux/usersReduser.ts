import React from 'react';
import {userApi} from "../Api/api";

type locationType = {
    country: string
    city: string
}

export type userDateType = {
    name: string
    id: number
    location: locationType
    ava: string
    message: string
    statusButton: boolean
    photos: {
        small: string
    }
    followed: boolean
};

export type initialStateUsersType = {
    users: Array<userDateType>
    totalCount: number
    pageSize: number
    actionPage: number
    isLoaded: boolean
    followArrButton: Array<number>
    // followed: boolean
    followBoolButton: boolean
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
export type IsDisabledButtonType = {
    type: 'IS_DISABLED_BUTTON'
    followBoolButton: boolean
    id: number
}


export type ActionUserType =
    FollowType
    | UnFollowType
    | SetUserType
    | SetTotalCountType
    | SetActionPageType
    | SetLoadedType
    | IsDisabledButtonType

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSER = 'SETUSER';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_ACTION_PAGE = 'SET_ACTION_PAGE';
const SET_LOADED = 'SET_LOADED';
const IS_DISABLED_BUTTON = 'IS_DISABLED_BUTTON';


export const followUser = (userId: number) => ({type: FOLLOW, userId});
export const unfollowUser = (userId: number) => ({type: UNFOLLOW, userId});
export const setUser = (users: Array<userDateType>) => ({type: SETUSER, users});
export const setTotalCount = (count: number) => ({type: SET_TOTAL_COUNT, totalCount: count});
export const setActionPage = (page: number) => ({type: SET_ACTION_PAGE, actionPage: page});
export const setLoaded = (load: boolean) => ({type: SET_LOADED, isLoaded: load});
export const isdisabledButton = (followBoolButton: boolean, id: number) => ({
    type: IS_DISABLED_BUTTON,
    followBoolButton,
    id
});

let initialState = {
    users: [],
    pageSize: 3,
    totalCount: 10,
    actionPage: 2,
    isLoaded: false,
    statusButton: false,
    followArrButton: [],
    followBoolButton: false

}

const usersReduser = (state: initialStateUsersType = initialState, action: ActionUserType): initialStateUsersType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
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
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        case SETUSER:
            return {
                ...state, users: [...action.users]
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
        case IS_DISABLED_BUTTON:

            return {
                ...state,
                followArrButton: action.followBoolButton ?
                    [...state.followArrButton, action.id] :
                    state.followArrButton.filter((i) => i !== action.id)
            }
        default:
            return state
    }
}
export default usersReduser;

export const getUser = (pageSize, actionPage) => {
    return (
        (dispatch) => {
            dispatch(setLoaded(true))

            userApi.getUsers(pageSize, actionPage)
                .then(response => {
                        dispatch(setLoaded(false))
                        dispatch(setUser(response.items))
                        dispatch(setTotalCount(response.totalCount))
        dispatch(setActionPage(actionPage))
                    }
                )
        }
    )
}

export const unFollowBlock = (iserId) => {
    return (
        (dispatch) => {
            dispatch(isdisabledButton(true, iserId))
            userApi.unFollow(iserId)
                .then(response => {
                    if (response.resultCode == 0) {
                        dispatch(unfollowUser(iserId))
                    }
                    dispatch(isdisabledButton(false, iserId))
                })
        }
    )
}

export const followBlock = (iserId) => {
    return (
        (dispatch) => {
            dispatch(isdisabledButton(true, iserId))
            userApi.follow(iserId)
                .then(response => {
                    if (response.resultCode == 0) {
                        dispatch(followUser(iserId))
                    }
                    dispatch(isdisabledButton(false, iserId))
                })
        }
    )
}
