import {usersConstant} from '../constants/usersConstant'

export function registration(state = {}, action) {
    switch (action.type) {
        case usersConstant.Register_Request:
            return {
                registering: true
            }
        case usersConstant.Register_Success:
            return {
                registration: true
            }
        case usersConstant.Register_Failure:
            return {
                registration: false
            }
        default:
            return state
    }
}