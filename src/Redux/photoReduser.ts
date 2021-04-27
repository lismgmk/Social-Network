import React from 'react';


import {initialStateType} from "./dialogsReduser";

const ADDPHOTO = 'ADDPHOTO';


export const addPhotoActionCreater = () => ({type: ADDPHOTO}as const);
type addPhotoType = ReturnType<typeof addPhotoActionCreater>



type imagesType = {
    id: number
    src: string
    active: boolean
}

type socialNetType = {
    id: number
    name: string
    path: string
}

export type photoPageType = {
    socialNet: Array<socialNetType>
    images: Array<imagesType>
}

let initialPhotoState : photoPageType = {
    images: [
        {
            id: 1,
            src: 'https://sun9-24.userapi.com/impg/ezkRA9_HeR3xzXTYMMaPWJ9BXSGtic5kONHo5w/Y0DqrLOlYN8.jpg?size=1080x1080&quality=96&sign=c7ac78a275a038536b03fc46ae9d9983&type=album',
            active: true
        },
        {
            id: 2,
            src: 'https://sun9-28.userapi.com/impg/wDzvBSm4cjsD37RBExA_rW-vWjs70fYUeyDudg/KQfI1sMzzpk.jpg?size=1280x960&quality=96&sign=25d98bcfa4059a4e13b2102ebb2acf1f&type=album',
            active: true
        },
        {
            id: 3,
            src: 'https://sun9-58.userapi.com/impg/KTZftXHYTUpHQ6hLS7djlM0ch3fcSw5CHenuKA/f6rgtsp8TyY.jpg?size=1280x960&quality=96&sign=148823426e63f80da476a06943544c75&type=album',
            active: true
        },
        {
            id: 4,
            src: 'https://sun9-56.userapi.com/impg/hRUOQ-4jg-YheyxEoHaFI98qraMc-wopFxWzTw/g7WVf9SkCQo.jpg?size=1080x1080&quality=96&sign=c2350eb252c0349495bb2fd43c29a55a&type=album',
            active: true
        },
        {
            id: 5,
            src: 'https://sun9-54.userapi.com/impg/OmaqsQZN5VGlp9TAFEuKnRmf5vj1FvHPXECjkQ/qTUa1HwQbtc.jpg?size=1080x1080&quality=96&sign=3e93d63970a79da03cd7ca835bbe24c0&type=album',
            active: true
        },
        {
            id: 6,
            src: 'https://sun9-20.userapi.com/impg/c857332/v857332167/170ceb/Za396_OPzfY.jpg?size=1080x1080&quality=96&sign=decd952151fa5232162bea6993fbdb62&type=album',
            active: true
        },
    ],
    socialNet: [
        {id: 1, name: 'Instagram', path: '../../public/instagram.svg'},
        {id: 2, name: 'Vkontakte', path: '../../public/vk.svg'},
        {id: 3, name: 'Faseboock', path: '../../public/facebook.svg'}
    ]
}
const photoReduser = (state: photoPageType = initialPhotoState, action: addPhotoType): photoPageType => {
    switch (action.type) {
        case ADDPHOTO:
            let newPhoto = {
                id: 7,
                src: 'https://sun9-20.userapi.com/impg/c857332/v857332167/170ceb/Za396_OPzfY.jpg?size=1080x1080&quality=96&sign=decd952151fa5232162bea6993fbdb62&type=album',
                active: true
            }
            return {
                ...state,
                images: [...state.images, newPhoto]
            }


        default:
            return state
    }
}

export default photoReduser;



