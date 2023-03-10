import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import requestsReducer from "./slices/requestsSlice";
import filterReducer from "./slices/filterSlice";




export default configureStore({
    reducer:{
    user: userReducer,
    requests: requestsReducer,
    filer: filterReducer,

    }
    
})