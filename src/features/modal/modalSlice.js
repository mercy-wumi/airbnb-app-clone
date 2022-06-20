import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    addBio: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = true;
        },
        closeLogin: (state, action) => {
            state.login = false;
        },
        openBio: (state, action) => {
            state.addBio = true;
        }
    }
})


export const { setLogin, closeLogin, openBio } = modalSlice.actions;
export default modalSlice.reducer;