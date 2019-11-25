import {usersConstant} from '../constants/usersConstant'

let users = JSON.parse(localStorage.getItem('users'))
const initialState = users ? {loggedIn: true, users} : {}


export function authenticateReducer(state = initialState, action) {
    switch (action.type) {
        case usersConstant.Login_Request:
            return {
                loggingIn: true,
                users: action.users
            }
        case usersConstant.Login_Success:
            return {
                loggedIn: true,
                users: action.users
            }
        case usersConstant.Login_Failure:
            return {}
        case usersConstant.Logout:
            return {}
        default:
            return state 
    }
}