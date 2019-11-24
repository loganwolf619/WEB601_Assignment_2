import {alertConstant} from '../constants/alertConstant'

export const usersAlerts = {
    Success,
    Error,
    Clear
}
function Success(message) {
    return {
        type: alertConstant.Success, message
    }
}

function Error(message) {
    return {
        type: alertConstant.Error, message
    }
}
        
function Clear(message) {
    return {
        type: alertConstant.Clear, message
    }
}       