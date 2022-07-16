import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import cardSlice from "./slices/testSlice";
import navSlice from "./slices/navSlice";


const rootReducer = combineReducers({
    card: cardSlice.reducer,
    nav: navSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

