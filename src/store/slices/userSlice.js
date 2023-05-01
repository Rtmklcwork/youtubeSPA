import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    requests: [],

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;

        }
        ,

        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.requests = [];

        },
       
        addRequests(state, action) {
            state.requests.push(action.payload)
     


        },
        deleteRequest(state, action) {
            state.requests = state.requests.filter((item) => typeof (item) === 'string' && item !== action.payload)

        },
       
    }
});

export const { setUser, removeUser, deleteRequest, addRequests } = userSlice.actions;
export default userSlice.reducer;