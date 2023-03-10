import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterData: []
};


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilterData(state, action) {
            state.filterData.push(action.payload)
        }

    }
});

export const { addFilterData } = filterSlice.actions;
export default filterSlice.reducer;
