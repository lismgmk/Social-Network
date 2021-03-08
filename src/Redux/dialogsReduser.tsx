import React from 'react';

const ADDDIALOG = 'ADDDIALOG';
const UPDATENEWDIALOGTEXT = 'UPDATENEWDIALOGTEXT';

export const addDialogActionCreater = () => ({type : ADDDIALOG});
export const updateNewDialogTextActionCreater = (text) => ({type : UPDATENEWDIALOGTEXT, newDialogText: text});


const dialogsReduser = (state, action) => {
    switch (action.type) {
        case ADDDIALOG:
            let newDialog = {name: 'Sergey E', id: 7};
            let newMessage = {message: state.newDialogText, id: 7};
            state.dialogs.push(newDialog);
            state.message.push(newMessage);
            state.newDialogText = '';
            return state;
        case UPDATENEWDIALOGTEXT:
            state.newDialogText = action.newDialogText
            return state;
        default:
            return state
    }


}



export default dialogsReduser;

