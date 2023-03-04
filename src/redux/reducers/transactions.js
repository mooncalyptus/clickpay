import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    amount: "",
    pin: "",
    notes: "",
    recipientId: "",
    date: "",
}

const transactions = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        detailTransaction: (state, {payload}) => {
            state.amount = payload.amount,
            state.notes = payload.notes,
            state.recipientId = payload.recipientId,
            state.date = payload.date
        },
        finalTransaction: (state, {payload}) => {
            state.pin = payload.pin
        }
    },
    extraReducers: (build) => {}
})

export const {detailTransaction, finalTransaction} = transactions.actions
export default transactions.reducer