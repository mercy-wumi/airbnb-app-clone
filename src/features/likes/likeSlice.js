import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    wishList: []
}

const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        setWishList: (state, action) => {
            state.wishList = [...state.wishList, ...action.payload]
        }
    }
})


export const { setWishList } = likeSlice.actions;

export default likeSlice.reducer;