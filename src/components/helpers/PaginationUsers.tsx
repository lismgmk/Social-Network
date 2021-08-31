import React, {useEffect, useState} from "react";
import s from './PaginationUsers.module.css'

type UsersPropstype = {
    totalCount: number
    pageSize: number
    clickActionPage: (p: number) => void
    actionPage: number
}

export const PaginationUsers: React.FC<UsersPropstype> = (props) => {

    let {
        totalCount,
        pageSize,
        clickActionPage,
        actionPage,
    } = props

    // useEffect(()=>{
    //     setStateActionPage(leftBordPortion+5)
    // },[])

    let portionPagesCount = Math.ceil(totalCount / (pageSize))
    let portionSize = 10
    let allPaginationPages = Math.ceil(portionPagesCount / (portionSize))


    let leftBordPortion = (allPaginationPages - 1) * portionSize
    let rightBordPortion = leftBordPortion + portionSize

    const [stateActionPage, setStateActionPage] = useState(actionPage)

    console.log(leftBordPortion)


    const arr: Array<number> = []
    for (let i = 0; i <= rightBordPortion; i++) {
        if (i > leftBordPortion && i < rightBordPortion) {
            arr.push(i)
        }
    }
    console.log(arr)
    return (
        <div className={s.container}>
            <div className={s.boxes}>
                {
                    leftBordPortion > 1 &&
                    <button
                    onClick={()=>{
                        setStateActionPage(leftBordPortion-portionSize)
                    }}
                    >{'<='}</button>
                }
                {arr.map(p => {
                    return (
                        <div
                            className={`${p === stateActionPage ? s.activePage : ''} ${s.pageNumberStyle}`}
                            onClick={(e) => {
                                setStateActionPage(p)
                                clickActionPage(p)
                            }}
                        >{p}</div>
                    )
                })}
                {
                    rightBordPortion > allPaginationPages &&
                    <button
                        onClick={()=>{
                            setStateActionPage(rightBordPortion+portionSize)
                        }}
                    >{'=>'}</button>
                }
            </div>
        </div>
    )
}
