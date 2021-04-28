import React from 'react';

type userDateType = {
    name: string
    id: number
    country: string
    city: string
    ava: string
    message: string
    follow: string
};


export type initialStateUsersType = {
    userDate: Array<userDateType>
}

export type AddUserType = {
    type: 'ADDUSER'
}

const ADDUSER = 'ADDUSER';

export const addUserActionCreater = () => ({type: ADDUSER} as const);

let initialState: initialStateUsersType = {
    userDate: [
        {name: 'Vova', id: 1, country: 'belarus', city: 'Minsk', ava: 'https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg', message: 'I am looking for your', follow: 'follow'},
        {name: 'Igor', id: 2, country: 'belarus', city: 'Minsk', ava: 'https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg' , message: 'I am looking for your', follow: 'unfollow'},
        {name: 'Sergey', id: 3, country: 'belarus', city: 'Minsk', ava: 'https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg' , message: 'I am looking for your', follow: 'follow'},
        {name: 'Genya', id: 4, country: 'belarus', city: 'Minsk', ava: 'https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg' , message: 'I am looking for your', follow: 'unfollow'},
        {name: 'Andrey', id: 5, country: 'belarus', city: 'Minsk', ava: 'https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg' , message: 'I am looking for your', follow: 'follow'}

    ]
}

const usersReduser = (state: initialStateUsersType = initialState, action: AddUserType):initialStateUsersType => {
    switch (action.type) {
        case ADDUSER:
            let newUserDate =  {name: 'Dima', id: 6, country: 'belarus', city: 'Minsk', ava: 'https://banner2.cleanpng.com/20191009/qxh/transparent-social-icon-social-icon-vk-social-logotype-icon-5da68002926890.9161733415711928345997.jpg', message: 'I am looking for your', follow: 'follow' };
            return {...state,
                userDate: [...state.userDate, newUserDate]
                // userDate: [...state.userDate, newUserDate]
            }
        default:
            return state
    }
}

export default usersReduser;

