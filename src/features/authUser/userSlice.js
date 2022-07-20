import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: '',
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
        },
        setImageUrl: (state, action) => {
            state.imgUrl = action.payload?.imgUrl;
        },
        setAirbnbUser: (state, action) => {
            state.airbnbUser = action.payload;
        },
        setUserId: (state, { payload }) => {
            state.userId = payload;
        }

    }
})

export const { setUser, setAirbnbUser, setUserId, setImageUrl } = userSlice.actions;
export const selectUser = (state) => state?.user;
export default userSlice.reducer;