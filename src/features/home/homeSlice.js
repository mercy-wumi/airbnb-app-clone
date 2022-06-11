import { createSlice } from "@reduxjs/toolkit";
import homeData from "../../homeData";

const initialState = {
    homeData: homeData,
    room: null
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {}
})



export default homeSlice.reducer;