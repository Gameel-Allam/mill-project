import { createSlice } from "@reduxjs/toolkit";
import {
  getAllVisits,
  getAllWheatProgram,
  getAllCollectionCenterProgram,
  getAllMillsSessionsProgram,
  getAllUsers,
} from "./mainActions";
import {
  getSingleVisit,
  getSingleWheatProgram,
  getSingleCollectionCenterProgram,
  getSingleMillSessionProgram,
  getSingleUser,
} from "./signleActions";

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
  visitsData: null,
  wheatPrograms: null,
  millSessionsPrograms: null,
  collectionCenterPrograms: null,
  hanagerPrograms: null,
  users: null,
  singleVisit: null,
  singleWheatProgram: null,
  singleMillSessionsPrograms: null,
  singleCollectionCenterPrograms: null,
  singleHanagerPrograms: null,
  singleUser: null,
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
      state.visitsData = null;
      state.wheatPrograms = null;
      state.millSessionsPrograms = null;
      state.collectionCenterPrograms = null;
      state.hanagerPrograms = null;
      state.users = null;
      state.pageInfo = initialPage;
    },
    resetVisitsData: (state) => {
      state.visitsData = null;
      state.singleVisit = null;
    },
    resetWheatPrograms: (state) => {
      state.wheatPrograms = null;
      state.singleWheatProgram = null;
    },
    resetMillSessionsPrograms: (state) => {
      state.millSessionsPrograms = null;
      state.singleMillSessionsPrograms = null;
    },
    resetCollectionCenterPrograms: (state) => {
      state.collectionCenterPrograms = null;
      state.singleCollectionCenterPrograms = null;
    },
    resetUsers: (state) => {
      state.users = null;
      state.singleUser = null;
    },
    resetPageInfo: (state) => {
      state.pageInfo = initialPage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllVisits.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVisits.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.succes = true;
        state.visitsData = payload.visits;
        state.pageInfo = payload.pageInfo;
      })
      .addCase(getAllVisits.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.visitsData = null;
        state.pageInfo = initialPage;
      })
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
      })
      .addCase(getSingleVisit.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleVisit.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.succes = true;
        state.singleVisit = payload;
      })
      .addCase(getSingleVisit.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.singleVisit = null;
      })
      .addCase(getSingleWheatProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleWheatProgram.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.succes = true;
        state.singleWheatProgram = payload;
      })
      .addCase(getSingleWheatProgram.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.singleWheatProgram = null;
      })
      .addCase(getSingleMillSessionProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleMillSessionProgram.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.succes = true;
        state.singleMillSessionsPrograms = payload;
      })
      .addCase(getSingleMillSessionProgram.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.singleMillSessionsPrograms = null;
      })
      .addCase(getSingleCollectionCenterProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getSingleCollectionCenterProgram.fulfilled,
        (state, { payload }) => {
          console.log(payload);
          state.loading = false;
          state.succes = true;
          state.pageInfo = payload.pageInfo;
          if (payload.type === "الهناجر")
            state.singleHanagerPrograms = payload.data;
          else state.singleCollectionCenterPrograms = payload.data;
        }
      )
      .addCase(
        getSingleCollectionCenterProgram.rejected,
        (state, { payload }) => {
          state.loading = false;
          state.error = true;
          state.errorMsg = payload.message;
          state.singleCollectionCenterPrograms = null;
          state.singleHanagerPrograms = null;
        }
      )
      .addCase(getSingleUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.succes = true;
        state.singleUser = payload.users;
      })
      .addCase(getSingleUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload.message;
        state.singleUser = null;
      });
  },
});

export const {
  reset,
  resetVisitsData,
  resetWheatPrograms,
  resetCollectionCenterPrograms,
  resetMillSessionsPrograms,
  resetPageInfo,
  resetUsers,
} = mainSlice.actions;
export default mainSlice.reducer;
