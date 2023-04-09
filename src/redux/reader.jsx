import {createSlice} from "@reduxjs/toolkit";


export const readerSlice = createSlice({
    name: "reader",
    initialState:{
        read: 0,
    },
    reducers: {
        increament: (state)=>{
            state.read +=1
        },
        decreament: (state)=>{
            state.read -=1
        },
        increamentByAmount : (state, action)=>{
            state.read += action.payload
        }
    }
})

export const {increament, decreament,increamentByAmount} = readerSlice.actions;
export default readerSlice.reducer