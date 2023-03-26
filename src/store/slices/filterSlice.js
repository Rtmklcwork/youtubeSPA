import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterData: {}
};


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
  
        addFilterData(state, action) {
            state.filterData = {...state.filterData, ...action.payload}
           }
        }
});

export const { addFilterData, deleteFilterData } = filterSlice.actions;
export default filterSlice.reducer;
