import { createSlice } from "@reduxjs/toolkit";
import {
  getAllWheatProgram,
  getAllCollectionCenterProgram,
  getAllMillsSessionsProgram,
} from "./ReviewerActions";

const initialState = {
  loading: false,
  succes: false,
  error: false,
  errorMsg: "",
  wheatPrograms: null,
  millSessionsPrograms: null,
  collectionCenterPrograms: null,
  hanagerPrograms: null,
  pageInfo: null,
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
    resetPageInfo: (state) => {
      state.pageInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllWheatProgram.pending, (state) => {
        state.loading = true;
        state.pageInfo = null;
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
