import { createSlice } from "@reduxjs/toolkit";

const signInUser = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null;

const initialState = {
    userId: '',
    firstname: '',
    lastname: '',
    email: '',
    dateofbirth: '',
    imgUrl: null,
    registeredUser: false,
    airbnbUser: signInUser
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
        },
        setImageUrl: (state, action) => {
            state.imgUrl = action.payload?.imgUrl;
        },
        setAirbnbUser: (state, action) => {
            state.airbnbUser = action.payload;
            localStorage.setItem('user', JSON.stringify(state.airbnbUser))
        },
        setUserId: (state, { payload }) => {
            state.userId = payload;
        },
        setResgisteredUser: (state) => {
            state.registeredUser = true;
        }

    }
})

export const { setUser, setAirbnbUser, setUserId, setImageUrl, setResgisteredUser, registeredUser } = userSlice.actions;
export const selectUser = (state) => state?.user;
export default userSlice.reducer;