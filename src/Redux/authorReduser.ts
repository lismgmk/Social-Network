import React from 'react';
import {formDataType, getAuthorDataRespType, headerApi} from "../Api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload
            }
        default:
            return state
    }
}
export default authorReduser;

export const getCurentAuthor = (id, login, email, isLog) => ({
    type: 'GET_AUTHOR', payload: {
        id, email, login, isLog
    }
} as const)

export const getAuthor = () =>
    (dispatch) => {
       return  headerApi.getAuthor()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    dispatch(getCurentAuthor(id, email, login, true)
                    )
                }
            })
    }


export const logInAuthor = (formData: formDataType) => {
    return (
        (dispatch) => {
            headerApi.logInAuthor(formData)
                .then(response => {
                    debugger
                    if (response.data.resultCode === 0) {
                        dispatch(getAuthor()
                        )
                    } else {
                        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                        dispatch(stopSubmit('loginForm', {_error: message}))
                    }
                })
        }
    )
}
export const logOutAuthor = () => {
    return (
        (dispatch) => {
            headerApi.logOutAuthor()
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(getCurentAuthor(null, null, null, false)
                        )
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
type ActionType = getAuthorActionType