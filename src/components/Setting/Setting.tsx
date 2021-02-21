import React from "react";

type SettingProps = {
    title: string
}

export function Setting(props: SettingProps) {
    return (

            <div><div>{props.title}</div></div>

    )
}