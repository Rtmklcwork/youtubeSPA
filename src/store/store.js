import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import requestsReducer from "./slices/requestsSlice";




export default configureStore({
    reducer:{
    user: userReducer,
    requests: requestsReducer,

    }
    
})