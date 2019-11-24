import {combineReducers} from 'redux'
import {authenticate} from './autheticateReducer.js'
import {registration} from './registrationReducer'
import {users} from './userReducer.js'
import {alert} from './alertReducer.js'

const rootReducer = combineReducers({
    authenticate,
    registration,
    users,
    alert
})