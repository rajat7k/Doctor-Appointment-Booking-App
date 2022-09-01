import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import { alertsSlice } from './alertSlice'
import { usersSlice } from './userSlice'

const rootReducer=combineReducers({
    alerts:alertsSlice.reducer,
    user:usersSlice.reducer,
})

const store=configureStore({
    reducer:rootReducer,
})
export default store;