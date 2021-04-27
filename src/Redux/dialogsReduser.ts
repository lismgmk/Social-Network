import React from 'react';

type dialogsType = {
    name: string
    id: number
};

type messageType = {
    message: string
    id: number
};

export type initialStateType = {
    dialogs: Array<dialogsType>
    message: Array<messageType>
    newDialogText: string
}

export type AddDialogType = {
    type: 'ADDDIALOG'
}


export type UpdateNewDialogTextType = {
    type: 'UPDATENEWDIALOGTEXT'
    text: string
}

export type ActionType = AddDialogType | UpdateNewDialogTextType

const ADDDIALOG = 'ADDDIALOG';
const UPDATENEWDIALOGTEXT = 'UPDATENEWDIALOGTEXT';

export const addDialogActionCreater = () => ({type : ADDDIALOG} as const);
export const updateNewDialogTextActionCreater = (text: string) => ({type : UPDATENEWDIALOGTEXT, text} as const);

let initialState : initialStateType = {
    dialogs: [
        {name: 'Andrey', id: 1},
        {name: 'Vova', id: 2},
        {name: 'Igor', id: 3},
        {name: 'Sergey', id: 4},
        {name: 'Vadik', id: 5},
        {name: 'Lis', id: 6},
    ],

    message: [
        {message: 'Hi hello', id: 1},
        {message: 'Good morning', id: 2},
        {message: 'Game Over', id: 3},
        {message: 'Bla-bla', id: 4},
        {message: 'vou', id: 5},
        {message: 'Good', id: 6}
    ],
    newDialogText: ''
}

const dialogsReduser = (state: initialStateType = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case ADDDIALOG:
            let newDialog = {name: 'Sergey E', id: 7};
            let newMessage = {message: state.newDialogText, id: 7};
            return {...state, dialogs: [...state.dialogs,  newDialog], message: [...state.message, newMessage], newDialogText: ''};
        case UPDATENEWDIALOGTEXT:
            return {...state, newDialogText: action.text}
        default:
            return state
    }
}

export default dialogsReduser;

