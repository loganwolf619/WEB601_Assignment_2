import {usersConstant} from '../constants/usersConstant'
export function user(state = {}, action) {
    switch (action.type) {
        case usersConstant.GetAll_Request:
            return {
                loading: true
            }
        case usersConstant.GetAll_Success:
            return {
                items: action.user
            }
        case usersConstant.GetAll_Failure:
            return {
                error: action.error
            }
            default:
                return state
    }
}