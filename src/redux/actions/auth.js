import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../helpers/http";
import jwt from 'jsonwebtoken';

export const loginAction = createAsyncThunk(
    "auth/loginAction",
    async ({ email, password, cb }) => {
      try {
        const { data } = await http().post("/auth/login", { email, password });
        cb();
        return data.results;
      } catch (error) {
        return error.response.data.message;
      }
    }
  );

  export const registerAction = createAsyncThunk(
    "auth/registerAction",
    async ({ email, password, phoneNumber, cb }) => {
      try {
        const { data } = await http().post("/auth/register", {
          email,
          password,
          phoneNumber,
        });
        cb();
        return data.results;
      } catch (error) {
        return error.response.data.message;
      }
    }
  );


// export const decodeToken = (token) => {
//   const decoded = jwt.decode(token);
//   return {
//     type: DECODE_TOKEN,
//     payload: decoded,
//   };
// };

// export const Login = createAsyncThunk(
//     "auth/login",
//     async({email, password, cb}, {rejecWithValue}) => {
//         try{
//             const config = {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             };
//             const res = await axios.post("https://68xkph-8888.preview.csb.app/auth/login", {email, password},
//             config
//             );
//             cb()
//             return res.data.results.token
//         } catch (error){
//             if(error.response && error.response.data.message){
//                 return rejecWithValue(error.response.data.message)
//             } else{
//                 return rejecWithValue(error.message)
//             }
//         }
//     }
// )