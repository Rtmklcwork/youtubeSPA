import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    savedVideos: '',
}

export const savedSlice = createSlice({
    name: 'Saved',
    initialState,
    reducers:{
        setSavedVideo:(state,action)=>{
            state.savedVideos = action.payload
        },
    },
});


export const {setSavedVideo} = savedSlice.actions;

export default savedSlice.reducer;