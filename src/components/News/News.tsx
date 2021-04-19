import React from "react";

type NewsProps = {
    title: string
}

export function News(props:NewsProps) {

    const numBer = (number: number) => {
        let out = 0
        if (number > 0) {
            for (let i = 0; i < number; i++) {
                if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
                    out += i
                }
            }
        } else {
            out = 0
        }
        return out
    }

    return (

            <div>
                {numBer(10)}
                {props.title}
            </div>

    )
}