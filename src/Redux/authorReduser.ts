import React from 'react';
import {headerApi} from "../Api/api";
import {stopSubmit} from "redux-form";
import {formDataType} from "../Types/types";
import {Redirect, Switch} from "react-router";
import {PATH} from "../App";
import ProfileContainer from "../components/Profile/ProfileContainer";
import UsersContainer from "../components/Users/UsersContainer";
import LoginContainer from "../components/Login/LoginContainer";
import DialogsContainer from "../components/Dialogs/DialogsContainer";

let initialState = {
    id: null as (number | null),
    email: null as (string | null),
    login: null as (string | null),
    isLog: false
}

const authorReduser = (state = initialState, action: ActionType): initialStateUsersType => {
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
        return headerApi.getAuthor()
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


export type initialStateUsersType = typeof initialState
type getAuthorActionType = ReturnType<typeof getCurentAuthor>
type ActionType = getAuthorActionType