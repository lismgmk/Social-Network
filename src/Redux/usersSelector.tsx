import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";


function getUsersSelector (state: AppStateType) {
    return state.usersPage.users
}

export const getUsers =createSelector(getUsersSelector, (users) => {
    return  users.filter(u => true)
})

export function pageSizeSelector (state: AppStateType) {
    return state.usersPage.pageSize
}
export function totalCountSelector (state: AppStateType) {
    return state.usersPage.totalCount
}
export function pageActionPage (state: AppStateType) {
    return state.usersPage.actionPage
}
export function pageIsLoaded (state: AppStateType) {
    return state.usersPage.isLoaded
}
export function followArrButtonSelector (state: AppStateType) {
    return state.usersPage.followArrButton
}
export function followBoolButtonSelector (state: AppStateType) {
    return state.usersPage.followBoolButton
}