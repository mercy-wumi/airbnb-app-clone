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
            const index = state.wishList.findIndex((item) => action.payload === item)
            state.wishList = state.wishList.splice(index, 1)
        }
    }
})


export const { setWishList, setRemove } = likeSlice.actions;

export default likeSlice.reducer;