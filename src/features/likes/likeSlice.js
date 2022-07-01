import { createSlice, current } from "@reduxjs/toolkit";
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
            const { id } = action.payload
            const data = state.wishList
            const index = data.findIndex(item => id === item.id)
            console.log(index)
            data.splice(index, 1)
        }
    }
})


export const { setWishList, setRemove } = likeSlice.actions;

export default likeSlice.reducer;