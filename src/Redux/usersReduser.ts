import React from 'react';
import {userApi} from "../Api/api";
import {getUserItemsType} from "../Types/types";


let initialState = {
    users: [] as Array<getUserItemsType>,
    pageSize: 10,
    totalCount: 10,
    actionPage: 1,
    isLoaded: false,
    statusButton: false,
    followArrButton: [] as Array<number>,
    followBoolButton: false
}



const usersReduser = (state = initialState, action: ActionUserType): initialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW':
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

        case 'UNFOLLOW':
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
        case 'SETUSER':
            return {
                ...state, users: [...action.users]
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state, totalCount: action.totalCount
            }
        case 'SET_ACTION_PAGE':
            return {
                ...state, actionPage: action.actionPage
            }
        case 'SET_LOADED':
            return {
                ...state, isLoaded: action.isLoaded
            }
        case 'IS_DISABLED_BUTTON':

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
    return (dispatch) => {
            dispatch(isdisabledButton(true, iserId))
            userApi.unFollow(iserId)
                .then(response => {
                    if (response.data.resultCode == 0) {
                        dispatch(unfollowUser(iserId))
                    }
                    dispatch(isdisabledButton(false, iserId))
                })
        }

}

export const followBlock = (iserId: number) => {
    return (
        (dispatch) => {
            dispatch(isdisabledButton(true, iserId))
            userApi.follow(iserId)
                .then(response => {
                    if (response.data.resultCode == 0) {
                        dispatch(followUser(iserId))
                    }
                    dispatch(isdisabledButton(false, iserId))
                })
        }
    )
}

export type FollowType = ReturnType<typeof followUser>
export type UnFollowType = ReturnType<typeof unfollowUser>
export type SetUserType = ReturnType<typeof setUser>
export type SetTotalCountType = ReturnType<typeof setTotalCount>
export type SetActionPageType = ReturnType<typeof setActionPage>
export type SetLoadedType = ReturnType<typeof setLoaded>
export type IsDisabledButtonType = ReturnType<typeof isdisabledButton>

export type ActionUserType =
    | FollowType
    | UnFollowType
    | SetUserType
    | SetTotalCountType
    | SetActionPageType
    | SetLoadedType
    | IsDisabledButtonType

export const followUser = (userId: number) => ({type: 'FOLLOW', userId} as const);
export const unfollowUser = (userId: number) => ({type: 'UNFOLLOW', userId} as const);
export const setUser = (users: Array<getUserItemsType>) => ({type: 'SETUSER', users} as const);
export const setTotalCount = (count: number) => ({type: 'SET_TOTAL_COUNT', totalCount: count} as const);
export const setActionPage = (page: number) => ({type: 'SET_ACTION_PAGE', actionPage: page} as const);
export const setLoaded = (load: boolean) => ({type: 'SET_LOADED', isLoaded: load} as const);
export const isdisabledButton = (followBoolButton: boolean, id: number) => ({
    type: 'IS_DISABLED_BUTTON',
    followBoolButton,
    id
} as const)

export type initialStateUsersType = typeof initialState