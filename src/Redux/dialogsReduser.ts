import React from 'react';

let initialState = {
    dialogs: [
        {name: 'Andrey', id: 1},
        {name: 'Vova', id: 2},
        {name: 'Igor', id: 3},
    ] as Array<dialogsType>,
    message: [
        {message: 'Hi hello', id: 1},
        {message: 'Good morning', id: 2},
    ] as Array<messageType>,
}

const dialogsReduser = (state = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case 'ADDDIALOG':
            let newDialog = {name: 'Sergey E', id: 7};
            let newMessage = {message: action.text, id: 7};
            return {...state,
                dialogs: [...state.dialogs,  newDialog],
                message: [...state.message, newMessage]
            }
        default:
            return state
    }
}

export default dialogsReduser;

export const addDialogActionCreater = (text: string) => ({type : 'ADDDIALOG', text} as const)

type dialogsType = {
    name: string
    id: number
}

type messageType = {
    message: string
    id: number
}

export type initialStateType = typeof initialState

export type ActionType =
    | ReturnType<typeof addDialogActionCreater>

