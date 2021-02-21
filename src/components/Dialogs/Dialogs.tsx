import React from "react";

type DialogsProps = {
    title: string
}

export function Dialogs(props:DialogsProps) {
    return (

            <div>
                <div>{props.title}</div>
            </div>

    )
}