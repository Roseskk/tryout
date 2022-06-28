import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import cardSlice from "./slices/testSlice";


const rootReducer = combineReducers({
    card: cardSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

