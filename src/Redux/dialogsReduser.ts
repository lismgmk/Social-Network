import React from 'react';

let initialState : initialStateType = {
    dialogs: [
        {name: 'Andrey', id: 1},
        {name: 'Vova', id: 2},
        {name: 'Igor', id: 3},
    ],

    message: [
        {message: 'Hi hello', id: 1},
        {message: 'Good morning', id: 2},
    ],
    newDialogText: ''
}

const dialogsReduser = (state: initialStateType = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case 'ADDDIALOG':
            let newDialog = {name: 'Sergey E', id: 7};
            let newMessage = {message: state.newDialogText, id: 7};
            return {...state, dialogs: [...state.dialogs,  newDialog], message: [...state.message, newMessage], newDialogText: ''};
        case 'UPDATENEWDIALOGTEXT':
            return {...state, newDialogText: action.text}
        default:
            return state
    }
}

export default dialogsReduser;

export const addDialogActionCreater = () => ({type : 'ADDDIALOG'} as const)
export const updateNewDialogTextActionCreater = (text: string) => ({type : 'UPDATENEWDIALOGTEXT', text} as const)


type dialogsType = {
    name: string
    id: number
}

type messageType = {
    message: string
    id: number
}

export type initialStateType = {
    dialogs: Array<dialogsType>
    message: Array<messageType>
    newDialogText: string
}

export type ActionType =
    | ReturnType<typeof addDialogActionCreater>
    | ReturnType<typeof updateNewDialogTextActionCreater>
