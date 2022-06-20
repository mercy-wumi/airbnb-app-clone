import { createSlice } from "@reduxjs/toolkit";
import homeData from "../../homeData";

const initialState = {
    homeData: homeData,
    room: {}
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setRoom: (state, action) => {
            state.room = { ...action.payload };
        }
    }
})

export const { setRoom } = homeSlice.actions;
export const selectRoom = (state) => state?.home;

export default homeSlice.reducer;