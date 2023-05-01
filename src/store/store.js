import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import filterReducer from "./slices/filterSlice";
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import userDataReducer from "./slices/userDataSlice";


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user.requests']
}

const rootReducer = combineReducers({
  user: userReducer,
  
  filter: filterReducer,
  userData: userDataReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export default store;