import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requests: [],
};

const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        addRequests(state, action) {
            state.requests.push(action.payload)
        },
        deleteRequest(state, action) {
            state.requests = state.requests.filter((item) => typeof (item) === 'string' && item !== action.payload)

        }
    }
})

export const { addRequests, deleteRequest } = requestsSlice.actions;
export default requestsSlice.reducer;