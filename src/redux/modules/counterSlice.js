import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const __addNumber = createAsyncThunk(
    //첫번쨰 인자 : aciton value
    "addNumber",
    //두번째 인자 : 콜백함수
    (payload, thunkAPI) => {
        setTimeout(()=>{
            thunkAPI.dispatch(addNumber(payload));
        },3000);
    }
);

const initialState = {
    number : 0,
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        addNumber : (state, action) => {
            state.number  = state.number + action.payload
        },

        minusNumber : (state, action) => {
            state.number = state.number - action.payload
        },
    },
});

export const {addNumber, minusNumber} = counterSlice.actions;
export default counterSlice.reducer;