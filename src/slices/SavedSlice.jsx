import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    savedVideos: '',
}

export const savedSlice = createSlice({
    name: 'Saved',
    initialState,
    reducers: {
        setSavedVideos: (state, action) => {
            state.savedVideos = action.payload
        },
    },
});


export const { setSavedVideos } = savedSlice.actions;

export default savedSlice.reducer;