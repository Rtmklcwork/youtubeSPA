import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
};


export const textSlice = createSlice({
    name: 'Text',
    initialState,
    reducers: {
        setText:(state,action)=>{
            state.inputText = action.payload
        },
    },
});

export const {setText} = textSlice.actions;
export default textSlice.reducer;