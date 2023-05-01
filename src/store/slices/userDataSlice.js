import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    userData: [],

};



const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUserData(state, action) {
            state.userData.push(action.payload)
            localStorage.setItem('user', JSON.stringify(state))
        },
        replaceUserData(state, action) {
            const currentUser = state.userData.find(item => item.id == action.payload.id)
            currentUser.requests = action.payload.requests
          

        }
    }
});

export const { addUserData, replaceUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
