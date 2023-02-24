import {createSlice} from '@reduxjs/toolkit'

import {Login} from "../actions/auth"

const initialState = {
    token: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, { payload })=> {
            state.token = payload
        },
        logout: (state, action) => {
            state.token = null
        },
    },
    extraReducers: (build)=> {}
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer