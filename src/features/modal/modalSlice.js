import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    addBio: false,
    menuDropdown: false
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
        },
        closeBio: (state, action) => {
            state.addBio = false;
        }
    }
})


export const { setLogin, closeLogin, openBio, closeBio } = modalSlice.actions;
export default modalSlice.reducer;