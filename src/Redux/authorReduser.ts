import React from 'react';
import {getAuthorDataRespType, headerApi} from "../Api/api";

export const getCurentAuthor = (data : getAuthorDataRespType) => ({type: 'GET_AUTHOR', data} as const);
export const setLog = (log : boolean) => ({type: 'SET_LOG', log} as const);

let initialState = {
    id: null,
    email: null,
    login: null,
    isLog: false
}

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


export type AuthorDataType = {
    id: number | null
    email: string | null
    login: string | null
    isLog: boolean
}
type initialStateUsersType = AuthorDataType
type getAuthorActionType = ReturnType<typeof getCurentAuthor>
type setLogActionType = ReturnType<typeof setLog>
type ActionType = getAuthorActionType | setLogActionType