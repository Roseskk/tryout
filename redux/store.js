import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import testSlice from "./slices/testSlice";


const rootReducer = combineReducers({
    test: testSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

