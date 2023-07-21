import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllWheatProgram = createAsyncThunk(
  "reviewer/getAllWheatProgram",
  async (pageInfo, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8080/incomingimportedprogram/",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
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

export const getAllMillsSessionsProgram = createAsyncThunk(
  "reviewer/getAllMillsSessionsProgram",
  async (pageInfo, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8080/mill-session",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
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

export const getAllCollectionCenterProgram = createAsyncThunk(
  "reviewer/getAllCollectionCenterProgram",
  async (type, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(type);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/collection-center/entityType=$(type}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      return { type, data: response.data };
    } catch (error) {
      const message = error.response?.data || error.message;
      console.log(message);
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
