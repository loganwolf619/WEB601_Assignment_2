import {combineReducers} from 'redux'
import {authenticateReducer} from './autheticateReducer.js'
import {registration} from './registrationReducer'
import {users} from './userReducer.js'
import {alert} from './alertReducer.js'

export default combineReducers({
    authenticateReducer,
    registration,
    users,
    alert
})