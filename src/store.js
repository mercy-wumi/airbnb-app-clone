import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './features/authUser/userSlice';
import HomeReducer from './features/home/homeSlice';
import ModalReducer from './features/modal/modalSlice';
import likeSlice from "./features/likes/likeSlice";

export const store = configureStore({
    reducer: {
        user: UserReducer,
        home: HomeReducer,
        modal: ModalReducer,
        likes: likeSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});