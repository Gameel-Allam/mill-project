import { createSlice } from "@reduxjs/toolkit";
import { checkAuth } from "./authActions";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  succes: false,
  error: false,
  errorMsg: "",
  loggedIn: false,
  userToken,
  userInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.succes = false;
      state.error = false;
      state.errorMsg = "";
      state.loggedIn = false;
      state.userToken = null;
      state.userInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.succes = true;
        state.loggedIn = true;
        state.userToken = payload.token;
        state.userInfo = payload.user;
      })
      .addCase(checkAuth.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.userToken = null;
        state.userInfo = {};
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
