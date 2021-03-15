import { types } from '../types/types'

export const fakeLogout = () => ({
         type : types.startLogout
})
export const fakeLogin = () => ({
         type : types.startLogin
})