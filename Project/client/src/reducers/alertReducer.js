import {alertConstant} from '../constants/alertConstant'

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstant.Success:
            return {
                type: 'alert-success',
                message: action.message
            }
        case alertConstant.Error:
            return {
                type: 'alert-error',
                message: action.message
            }
        case alertConstant.Clear:
            return {}
            default:
                return state
    }
}