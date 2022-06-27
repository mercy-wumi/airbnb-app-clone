import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    dateofbirth: '',
    imgUrl: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.firstname = action.payload?.firstname;
            state.lastname = action.payload?.lastname;
            state.dateofbirth = action.payload?.dateofbirth;
            state.email = action.payload?.email;
            state.imgUrl = action.payload?.imgUrl;
        }
    }
})

export const { setUser } = userSlice.actions;
export const selectUser = (state) => state?.user;
export default userSlice.reducer;