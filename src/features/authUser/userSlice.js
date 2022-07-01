import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    dateofbirth: '',
    imgUrl: null,
    airbnbUser: null
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
        },
        setAirbnbUser: (state, action) => {
            state.airbnbUser = action.payload;
        }


    }
})

export const { setUser, setAirbnbUser } = userSlice.actions;
export const selectUser = (state) => state?.user;
export default userSlice.reducer;