import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './features/authUser/userSlice';
import HomeReducer from './features/home/homeSlice';

export const store = configureStore({
    reducer: {
        user: UserReducer,
        home: HomeReducer
    },
});