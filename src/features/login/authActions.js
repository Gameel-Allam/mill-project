import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (userAuth, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/api/auth/authenticate/",
        headers: { "Content-Type": "application/json" },
        data: userAuth,
      });
      console.log(response.data);
      localStorage.setItem("userToken", response.data.token);
      return response.data;
    } catch (error) {
      const message = error.response?.data || error.message;
      console.log(message);
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const checkCode = createAsyncThunk(
  "auth/checkCode",
  async (userAuth, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/api/auth/forget-password-auth/",
        headers: { "Content-Type": "application/json" },
        data: userAuth,
      });
      console.log(response.data);
      localStorage.setItem("userToken", response.data.token);
      return response.data;
    } catch (error) {
      const message = error.response?.data || error.message;
      console.log(message);
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const createPassword = createAsyncThunk(
  "auth/createPassword",
  async (userPassword, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.userToken;
      const response = await axios({
        method: "put",
        url: "http://localhost:8080/api/auth/forgert-password/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: userPassword,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      const message = error.response?.data || error.message;
      console.log(message);
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
