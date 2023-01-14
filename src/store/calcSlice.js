import {createSlice} from "@reduxjs/toolkit";


const calcSlice = createSlice({
    name:'calcSlice',
    initialState:{
        result:0,
        numberOne:'',
        numberTwo:''
    },
    reducers: {
        increment: (state, action) => {
            state.result = action.payload.numberOne + action.payload.numberTwo
        },
        decrement: (state, action) => {
            state.result = action.payload.numberOne - action.payload.numberTwo
        },
        multiplication: (state, action) => {
            state.result = action.payload.numberOne * action.payload.numberTwo
        },
        division: (state, action) => {
            state.result =action.payload.numberOne / action.payload.numberTwo
        }
    }
})

export const {increment, decrement, multiplication, division} = calcSlice.actions;

export default calcSlice.reducer