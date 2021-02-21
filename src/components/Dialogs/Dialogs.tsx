import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogProps = {
    name: string,
    id: number
};

type MessageProps = {
    message: string
}

const Dialog = function (props: DialogProps){
    let path = `/message/${props.id}`;
    return(
        <div className={s.dialogsItem}>
            <NavLink to={path} className={s.dialog}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = function (props: MessageProps){
    return(
        <div className={s.message}>{props.message}</div>
    )
}


export function Dialogs() {
    return (
            <div className={s.dialogs}>

                <div className={s.dialogsItem}>
                    <Dialog name={'Andrev'} id={1}/>
                    <Dialog name={'Vova'} id={2}/>
                    <Dialog name={'Igor'} id={3}/>
                    <Dialog name={'Sergey'} id={4}/>
                    <Dialog name={'Ivan'} id={5}/>
                    <Dialog name={'Gleb'} id={6}/>
                </div>

                <div className={s.messages}>
                    <Message message={'jklrjl'}/>
                    <Message message={'jklrjl'}/>
                    <Message message={'jklrjl'}/>
                    <Message message={'jklrjl'}/>

                </div>

            </div>

    )
}