import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    userData:[]
}
const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUserData(state, action) {
            state.userData.push({...action.payload})
        },
       
}
})

export const { addUserData } = userDataSlice.actions;
export default userDataSlice.reducer;