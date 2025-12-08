import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
}

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: (state , action) => {
            state.token = action.payload.token;
        },

        getToken: (state) => {
            return state.token;
        }
    }
})

export const { getToken , setToken } = tokenSlice.actions

export default tokenSlice.reducer