import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import cardSlice from "./slices/testSlice";
import navSlice from "./slices/navSlice";
import {tryoutApi} from "./tryout/tryout.api";


const rootReducer = combineReducers({
    card: cardSlice.reducer,
    nav: navSlice.reducer,
    [tryoutApi.reducerPath] : tryoutApi.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

