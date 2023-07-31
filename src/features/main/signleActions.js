import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleVisit = createAsyncThunk(
  "main/getSingleVisit",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/visits/${params.id}`,
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

export const getSingleWheatProgram = createAsyncThunk(
  "main/getSingleWheatProgram",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/incomingimportedprogram/${params.id}`,
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

export const getSingleMillSessionProgram = createAsyncThunk(
  "main/getSingleMillSessionProgram",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/mill-session/${params.id}`,
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
export const getSingleCollectionCenterProgram = createAsyncThunk(
  // Action name
  "main/getSingleCollectionCenterProgram",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/collection-center/${params.id}?entityType=${params.type}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      return { type: params.type, data: response.data };
    } catch (error) {
      const message = error.response?.data || error.message;
      console.log(message);
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const getSingleUser = createAsyncThunk(
  "main/getSingleUser",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/manager/user/${params.id}`,
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
