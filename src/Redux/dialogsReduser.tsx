import React from 'react';
import {dialogsMessageType} from "./Store";

const ADDDIALOG = 'ADDDIALOG';
const UPDATENEWDIALOGTEXT = 'UPDATENEWDIALOGTEXT';

export const addDialogActionCreater = () => ({type : ADDDIALOG});
export const updateNewDialogTextActionCreater = (text) => ({type : UPDATENEWDIALOGTEXT, text});

let initialState : dialogsMessageType = {
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

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADDDIALOG:
            let newDialog = {name: 'Sergey E', id: 7};
            let newMessage = {message: state.newDialogText, id: 7};
            // state.dialogs.push(newDialog);
            // state.message.push(newMessage);
            // state.newDialogText = '';
            return {...state, dialogs: [...state.dialogs,  newDialog], message: [...state.message, newMessage], newDialogText: ''};
        case UPDATENEWDIALOGTEXT:

            return {...state, newDialogText: action.text}
        default:
            return state
    }


}



export default dialogsReduser;

