import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    userData: []
};



const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUserData(state, action) {
            // state.userData.push(...state.userData, action.payload)
            state.userData.push(action.payload)
        },
        replaceUserData(state, action) {
            const currentUser = state.userData.find(item=> item.id == action.payload.id)

            console.log(333,currentUser);
           currentUser.requests = action.payload.requests
            // state.userData = [...state.userData,action.payload]
            
        }
    }
});

export const { addUserData, replaceUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
