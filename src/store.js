import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './features/authUser/userSlice';

export const store = configureStore({
    reducer: {
        user: UserReducer
    },
});