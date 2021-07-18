import {headerApi} from "../Api/api";
import {getAuthor, getCurentAuthor} from "./authorReduser";
import {AppStateType} from "./redux-store";

let initialState = {
    initialazed: false
}

const appReduser = (state: initialazedStateType = initialState, action: ActionType): initialazedStateType => {
    switch (action.type) {
        case "INITIAL_SUCCESS":
            return {
                ...state,
                initialazed: true
            }
        default:
            return state
    }
}
export default appReduser;

export const initialSuccess = () => ({type: 'INITIAL_SUCCESS'} as const)

export const getInitialAuthor = () => {
    return (
        (dispatch) => {
         dispatch(getAuthor())
              .then(()=>{
                  dispatch(initialSuccess())
              })
        }
    )
}

export type initialazedStateType = {
    initialazed: boolean
}

type initialSuccessAC = ReturnType<typeof initialSuccess>
type ActionType = initialSuccessAC