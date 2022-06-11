import { createSlice } from "@reduxjs/toolkit";
import homeData from "../../homeData";

const initialState = {
    homeData: homeData,
    active: 'main',
    room: null
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        }
    }
})


export const { active, setActive } = homeSlice.actions;
export default homeSlice.reducer;