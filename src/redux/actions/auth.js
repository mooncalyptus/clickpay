import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import jwt from 'jsonwebtoken';

export const decodeToken = (token) => {
  const decoded = jwt.decode(token);
  return {
    type: DECODE_TOKEN,
    payload: decoded,
  };
};

export const Login = createAsyncThunk(
    "auth/login",
    async({email, password, cb}, {rejecWithValue}) => {
        try{
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const res = await axios.post("https://68xkph-8888.preview.csb.app/auth/login", {email, password},
            config
            );
            cb()
            return res.data.results.token
        } catch (error){
            if(error.response && error.response.data.message){
                return rejecWithValue(error.response.data.message)
            } else{
                return rejecWithValue(error.message)
            }
        }
    }
)