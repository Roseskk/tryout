import {createSlice} from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState:{
        navlist: 'opacity-0 w-[0px] h-[0px] invisible',
        navListExitButton: 'opacity-0'
    },
    reducers: {
        navReducer: (state=0,{payload})=>{
            if (payload.isNavList === state.navlist ) {
                state.navlist = 'md:animate-sideListHide';
                state.navListExitButton = 'opacity-0';
            } else {
                state.navlist = payload?.isNavList;
                state.navListExitButton = payload?.isNavListButton;
            }
        }
    }
})

export const {navReducer} = navSlice.actions

export default navSlice