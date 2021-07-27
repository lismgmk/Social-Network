import React, {ChangeEvent, useEffect, useState} from "react";
import {useSelector} from "react-redux";


export const ProfileStatusWithHook: React.FC<statusType> = React.memo((props) => {

    const {statusAuthor, setStatusAuthor} = props

    const [editMode, seteditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.statusAuthor)

    useEffect(()=>{
            setStatus(statusAuthor)

    }, [statusAuthor])

    function deActivateEditMode() {
        debugger
        seteditMode(false)
        setStatusAuthor(status)
    }

    const setCurentInput = (e:  ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                { !editMode && <div>
                    <span onDoubleClick={()=>seteditMode(true)} >{statusAuthor || '-----'}</span>
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