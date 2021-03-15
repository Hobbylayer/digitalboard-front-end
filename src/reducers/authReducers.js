import { types } from "../types/types"

const initialState = {
    checking: false,
    isLoged: true
}


export const authReducer = ( state = initialState , action ) => {

    switch( action.type ){

            case types.startLogin:
                return {
                    ...state,
                    isLoged: false
                }

            case types.startLogout:
                return {
                    ...state,
                    isLoged: false
                }

            default:
                return state
    }
}