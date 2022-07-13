import {createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState:{
        id: '',
        cardName : '',
        cardUi: '',
        cardText: '',
        transform: 'opacity-0',

    },
    reducers: {
      cardReducer: (state=0,{payload})=>{
          state.id = payload?.idx;
          state.cardName = payload?.name;
          state.cardText = payload?.text;
          state.cardUi = payload?.img;
          state.transform = payload.transform;
      }
    }
})

export const {cardReducer} = cardSlice.actions

export default cardSlice