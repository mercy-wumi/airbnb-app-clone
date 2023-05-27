import { createSlice } from "@reduxjs/toolkit";

const wishListItem = localStorage.getItem('wishList') !== null && localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('wishList')) : [];
const initialState = {
    wishList: wishListItem
}

const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        setWishList: (state, action) => {
            state.wishList = [...state.wishList, action.payload]
            localStorage.setItem('wishList', JSON.stringify(state.wishList))
        },
        setRemove: (state, action) => {
            console.log(action.payload)
            const { id } = action.payload
            const data = state.wishList
            const index = data.findIndex(item => id === item.id)
            console.log(index)
            data.splice(index, 1)
            localStorage.setItem('wishList', JSON.stringify(state.wishList))
        }
    }
})


export const { setWishList, setRemove } = likeSlice.actions;

export default likeSlice.reducer;