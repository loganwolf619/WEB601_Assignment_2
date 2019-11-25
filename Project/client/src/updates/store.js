import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
// import {createReduxLogger} from 'redux-logger'
import rootReducers from '../reducers'


// const loggerMiddleWare = createReduxLogger()

export const store = createStore(
    rootReducers,
    applyMiddleware(
        thunkMiddleware,
        // loggerMiddleWare
    )
)