import React from "react";

type MusicProps = {
    title: string
}

export function Music(props:MusicProps) {
    return (

            <div><div>{props.title}</div></div>

    )
}