import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requests : [],
};

const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    addRequests(state,action){
        state.requests.push(action.payload)
    }
})

export const {addRequests} = requestsSlice.actions;
export default requestsSlice.reducer;