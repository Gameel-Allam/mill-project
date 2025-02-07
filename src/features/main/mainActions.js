import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllVisits = createAsyncThunk(
  "main/getAllVisits",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/visits/?keyword=${params.searchValue}&pageNumber=${params.pageNumber}`,
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

export const getAllWheatProgram = createAsyncThunk(
  "main/getAllWheatProgram",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    console.log(params.searchValue);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/incomingimportedprogram/?keyword=${params.searchValue}&page=${params.pageNumber}`,
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
  "main/getAllMillsSessionsProgram",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    console.log(params.searchValue);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/mill-session/?keyword=${params.searchValue}&page=${params.pageNumber}`,
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
  "main/getAllCollectionCenterProgram",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    console.log(params.searchValue);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/collection-center/?entityType=${params.type}&keyword=${params.searchValue}&page=${params.pageNumber}`,
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

export const getAllUsers = createAsyncThunk(
  "main/getAllUsers",
  async (params, thunkAPI) => {
    const token = await thunkAPI.getState().auth.userToken;
    console.log(params);
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/manager/user?keyword=${params.searchValue}&pageNumber=${params.pageNumber}`,
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
