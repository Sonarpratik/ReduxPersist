import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import favReducer from "../features/favMovieSlice";
import userReducer from "../features/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // blacklist: ["user"],
}

const reducer = combineReducers({
  favorites: favReducer,
  user: userReducer 

})
const persistedReducers = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: 
    persistedReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
