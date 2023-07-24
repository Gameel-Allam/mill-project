import { createSlice } from "@reduxjs/toolkit";
import {
  getAllWheatProgram,
  getAllCollectionCenterProgram,
  getAllMillsSessionsProgram,
  getAllUsers,
} from "./mainActions";
const initialPage = {
  "current-page": 0,

  "total-items": 2,

  "total-pages": 4,
};

const initialState = {
  loading: false,
  succes: false,
  error: false,
  errorMsg: "",
  wheatPrograms: null,
  millSessionsPrograms: null,
  collectionCenterPrograms: null,
  hanagerPrograms: null,
  users: null,
  pageInfo: initialPage,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.succes = false;
      state.error = false;
      state.errorMsg = "";
      state.wheatPrograms = null;
      state.millSessionsPrograms = null;
      state.collectionCenterPrograms = null;
      state.hanagerPrograms = null;
      state.users = null;
      state.pageInfo = initialPage;
    },
    resetWheatPrograms: (state) => {
      state.wheatPrograms = null;
    },
    resetMillSessionsPrograms: (state) => {
      state.millSessionsPrograms = null;
    },
    resetCollectionCenterPrograms: (state) => {
      state.collectionCenterPrograms = null;
    },
    resetUsers: (state) => {
      state.users = null;
    },
    resetPageInfo: (state) => {
      state.pageInfo = initialPage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllWheatProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllWheatProgram.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.succes = true;
        state.wheatPrograms = payload.programs;
        state.pageInfo = payload.pageInfo;
      })
      .addCase(getAllWheatProgram.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.wheatPrograms = null;
        state.pageInfo = initialPage;
      })
      .addCase(getAllMillsSessionsProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMillsSessionsProgram.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.succes = true;
        state.millSessionsPrograms = payload.programs;
        state.pageInfo = payload.pageInfo;
      })
      .addCase(getAllMillsSessionsProgram.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.millSessionsPrograms = null;
        state.pageInfo = initialPage;
      })
      .addCase(getAllCollectionCenterProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllCollectionCenterProgram.fulfilled,
        (state, { payload }) => {
          console.log(payload);
          state.loading = false;
          state.succes = true;
          state.pageInfo = payload.pageInfo;
          if (payload.type === "الهناجر")
            state.hanagerPrograms = payload.data.programs;
          else state.collectionCenterPrograms = payload.data.programs;
        }
      )
      .addCase(getAllCollectionCenterProgram.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.collectionCenterPrograms = null;
        state.hanagerPrograms = null;
        state.pageInfo = initialPage;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.succes = true;
        state.pageInfo = payload.pageInfo;
        state.users = payload.users;
      })
      .addCase(getAllUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.users = null;
        state.pageInfo = initialPage;
      });
  },
});

export const {
  reset,
  resetWheatPrograms,
  resetCollectionCenterPrograms,
  resetMillSessionsPrograms,
  resetPageInfo,
  resetUsers,
} = mainSlice.actions;
export default mainSlice.reducer;
