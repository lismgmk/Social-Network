import {getAuthor, getCurentAuthor} from "./authorReduser";


let initialState = {
    initialazed: false,
    captcha: '' as (string | undefined)
}

const appReduser = (state = initialState, action: ActionType): initialazedStateType => {
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


export type initialazedStateType = typeof initialState

type initialSuccessAC = ReturnType<typeof initialSuccess>
type ActionType = initialSuccessAC