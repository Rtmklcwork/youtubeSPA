import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import requestsReducer from "./slices/requestsSlice";
import filterReducer from "./slices/filterSlice";
import userDataReducer from './slices/userDataSlice'
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


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'userData'],
  blacklist: ['filter'] 
}

const rootReducer = combineReducers({
  user: userReducer,
  requests: requestsReducer,
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