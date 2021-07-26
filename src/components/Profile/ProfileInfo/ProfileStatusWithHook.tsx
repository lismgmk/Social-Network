import React, {ChangeEvent, useEffect, useState} from "react";
import {useSelector} from "react-redux";


export const ProfileStatusWithHook = React.memo((props: statusType) => {

    const [editMode, seteditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.statusAuthor)

    useEffect(()=>{
            setStatus(props.statusAuthor)
    }, [props.statusAuthor])


    function deActivateEditMode() {
        seteditMode(false)
        props.setStatusAuthor(status)
    }



    const setCurentInput = (e:  ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                { !editMode && <div>
                    <span onDoubleClick={()=>seteditMode(true)} >{props.statusAuthor || '-----'}</span>
                </div>}
                { editMode && <div>
                    <input autoFocus = {true}
                           onBlur = {deActivateEditMode}
                           value = {status }
                           onChange={setCurentInput}
                    />
                </div>}
            </div>
        )

})

type statusType = {
    statusAuthor: string
    setStatusAuthor: (param: string) => void
}