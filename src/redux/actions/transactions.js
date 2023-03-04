import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const createTransaction = createAsyncThunk('transactions/create', async({token, ...payload}) => {
    const {data} = await http(token).post('/transactions/transfer', payload)
    return data.results
})