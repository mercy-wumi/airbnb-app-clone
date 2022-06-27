import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    wishList: []
}

const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        setWishList: (state, action) => {
            state.wishList = [...state.wishList, action.payload]
        },
        setRemove: (state, action) => {
            console.log(action.payload)
            state.wishList = state.wishList.filter((item) => item !== action.payload)
            console.log(state.wishList)
        }
    }
})


export const { setWishList, setRemove } = likeSlice.actions;

export default likeSlice.reducer;