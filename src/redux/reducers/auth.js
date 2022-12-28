import {createSlice} from '@reduxjs/toolkit'

import {Login} from "../actions/auth"

const initialState = {
    loading: false,
    token: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.token = null
            state.error = null
            state.loading = false
        },
    },
    extraReducers: (build)=> {
        build.addCase(Login.pending, (state, action)=> {
            state.loading = true;
        })
        build.addCase(Login.rejected, (state, action)=> {
            state.error = action.payload
            state.loading = false;
        })
        build.addCase(Login.fulfilled, (state, action)=> {
            state.token = action.payload;
            state.error = null
            state.loading = false
        })
    }
})

export const {logout} = authSlice.actions
export default authSlice.reducer