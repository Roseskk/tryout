import {createSlice} from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'test',
    initialState:{
        testValue : ''
    },
    reducers: {
      smth: (state)=>{
          state.testValue = 1
      }
    }
})

export const {smth} = testSlice.actions

export default testSlice