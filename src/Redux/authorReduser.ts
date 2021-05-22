import React from 'react';
import {headerApi} from "../Api/api";

export type AuthorDataType = {
    id: number | null
    email: string | null
    login: string | null
    isLog: boolean
}

type getAuthorActionType = {
    type: 'GET_AUTHOR',
    data: AuthorDataType
}

type setLogActionType = {
    type: 'SET_LOG',
    log: boolean
}

type ActionType = getAuthorActionType | setLogActionType

const GET_AUTHOR = 'GET_AUTHOR';
const SET_LOG = 'SET_LOG';

export const getCurentAuthor = (data : AuthorDataType) => ({type: GET_AUTHOR, data});
export const setLog = (log : boolean) => ({type: SET_LOG, log});


let initialState = {
    id: null,
    email: null,
    login: null,
    isLog: false
}
type initialStateUsersType = AuthorDataType


const authorReduser = (state: initialStateUsersType = initialState, action: ActionType): initialStateUsersType => {
    switch (action.type) {
        case "GET_AUTHOR":
            return {
                ...state,
                ...action.data
            }
        case "SET_LOG":
            return {
                ...state,
                isLog: action.log
            }
        default:
            return state
    }
}

export default authorReduser;

export const getAuthor = () => {
    return(
        (dispatch) => {
            headerApi.getAuthor()
                .then(response => {
                    if(response.resultCode === 0){
                        dispatch(setLog(true))
                        dispatch(getCurentAuthor(response.data))
                    }

                })
        }
    )
}
