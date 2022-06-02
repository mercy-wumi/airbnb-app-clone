import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    dob: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.firstname = action.payload;
            state.lastname = action.payload;
            state.email = action.payload;
            state.dob = action.payload;
        }
    }
})

export const { setValue } = userSlice.actions;

export default userSlice.reducer;