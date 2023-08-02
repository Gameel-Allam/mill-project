import { createSlice } from "@reduxjs/toolkit";
import {
  getAllWheatProgram,
  getAllCollectionCenterProgram,
  getAllMillsSessionsProgram,
  createSessionProgram,
  createCollection,
  createWheatPro,
} from "./reviewerActions";

const initialState = {
  loading: false,
  succes: false,
  error: false,
  errorMsg: "",
  wheatPrograms: null,
  millSessionsPrograms: null,
  collectionCenterPrograms: null,
};

const reviewerSlice = createSlice({
  name: "reviewer",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.succes = false;
      state.error = false;
      state.errorMsg = "";
      state.wheatPrograms = null;
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
      })
      .addCase(getAllWheatProgram.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.wheatPrograms = null;
      })
      .addCase(getAllMillsSessionsProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMillsSessionsProgram.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.succes = true;
        state.millSessionsPrograms = payload.programs;
      })
      .addCase(getAllMillsSessionsProgram.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.millSessionsPrograms = null;
      })
      .addCase(getAllCollectionCenterProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllCollectionCenterProgram.fulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.succes = true;
          state.collectionCenterPrograms = payload.programs;
        }
      )
      .addCase(getAllCollectionCenterProgram.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.collectionCenterPrograms = null;
      })
      .addCase(createSessionProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSessionProgram.fulfilled, (state) => {
        state.loading = false;
        state.succes = true;
      })
      .addCase(createSessionProgram.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
      })
      .addCase(createCollection.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCollection.fulfilled, (state) => {
        state.loading = false;
        state.succes = true;
      })
      .addCase(createCollection.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
      })
      .addCase(createWheatPro.pending, (state) => {
        state.loading = true;
      })
      .addCase(createWheatPro.fulfilled, (state) => {
        state.loading = false;
        state.succes = true;
      })
      .addCase(createWheatPro.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
      });
  },
});

export const {
  reset,
  resetWheatPrograms,
  resetCollectionCenterPrograms,
  resetMillSessionsPrograms,
} = reviewerSlice.actions;
export default reviewerSlice.reducer;
