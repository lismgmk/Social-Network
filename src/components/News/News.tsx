import React from "react";

type NewsProps = {
    title: string
}

export function News(props:NewsProps) {
    return (

            <div><div>{props.title}</div></div>

    )
}