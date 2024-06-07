import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        test: ""
    },
    reducers: {
        test(state, action) {
            state.test = action.payload
        }
    }
});

export const rootReducer = rootSlice.reducer;