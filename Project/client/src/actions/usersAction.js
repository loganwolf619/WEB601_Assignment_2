import {usersConstant} from '../constants/usersConstant'
import {usersServices} from '../services/usersServices'
import {usersAlerts} from './usersAlerts'

export const usersAction = {
    usersLogin,
    userLogout,
    userRegister,
    getUser
}

function usersLogin(usersEmail, usersPassword) {
    return dispatch => {
        dispatch(request({usersEmail}))

        usersServices.usersLogin(usersEmail, usersPassword)
            .then(
                users => {
                    dispatch(success(users))
                },
                error => {
                    dispatch(failure(error))
                    dispatch(usersAlerts.error(error))
                }
            )
    }

    function request(users) { return { type: usersConstant.LOGIN_REQUEST, users } }
    function success(users) { return { type: usersConstant.LOGIN_SUCCESS, users } }
    function failure(error) { return { type: usersConstant.LOGIN_FAILURE, error } }
}

function userLogout() {
    usersServices.userLogout()
    return {
        type: usersConstant.userLogout
    }
}

function userRegister(fields) {
    return dispatch => {
        dispatch(request(fields))

        usersServices.userRegister(fields)
            .then (
                _fields => {
                    dispatch(success())
                    dispatch(usersAlerts.success('Successful Registration'))
                },
                error => {
                    dispatch(failure(error))
                    dispatch(usersAlerts.error(error))
                }
            )
    }

    function request(fields) {
        return {
            type: usersConstant.REGISTER_REQUEST, fields
        }
    }

    function success(users) {
        return {
            type: usersConstant.REGISTER_SUCCESS, users
        }
    }

    function failure(error) {
        return {
            type: usersConstant.REGISTER_FAILURE, error
        }
    }
}

function getUser() {
    return dispatch => {
        dispatch(request())

        usersServices.getUser()
            .then (
                users => {
                    dispatch(success(users))
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }

    function request() {
        return {
            type: usersConstant.GETACCOUNT_REQUEST
        }
    }

    function success(users) {
        return {
            type: usersConstant.GETACCOUNT_SUCCESS, users
        }
    }

    function failure(error) {
        return {
            type: usersConstant.GETACCOUNT_FAILURE, error
        }
    }
}