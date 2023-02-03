import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requests: ['cats', 'батайск'],
};

const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        addRequests(state, action) {
            state.requests.push(action.payload)
        }

    }
})

export const { addRequests } = requestsSlice.actions;
export default requestsSlice.reducer;