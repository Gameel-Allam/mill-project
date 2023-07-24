import { createSlice } from "@reduxjs/toolkit";
import { enterVisit, exitVisit, getAllVisits, getWheatInfo } from "./ScaleActions";
// const date = new Date();
// const timestamp = date.toISOString();

const initialState = {
  loading: false,
  success: false,
  error: false,
  errorMessage: "",
  openModal: false,
  scaleModal: false,
  WheatVisitId: "",
  disabledEdit: false,
  visitAllData: [],
  pageInfo: {},
  visitData: {},
  entityNames: [],
  wheatInfo: {},
  scaleFormData: {}
}
export const ScaleSlice = createSlice({
  name: "scale",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.openModal = false;
    },
    setVisitId: (state, action) => {
      state.WheatVisitId = action.payload;
    },
    openScaleModal: (state) => {
      state.scaleModal = true;
    },
    closeScaleModal: (state) => {
      state.scaleModal = false;
    },
    updataAddFormData: (state, action) => {
      state.scaleFormData = action.payload;
    },
    //   ResetValues: (state) => {
    //     state.addFormData = addFormData;
    //     console.log("object")
    //   },
    //   updataEditFormData: (state, action) => {
    //     state.visitData = action.payload;
    //   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllVisits.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVisits.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.visitAllData = action.payload.visits;
        state.pageInfo = action.payload.pageInfo;
      })
      .addCase(getAllVisits.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(getWheatInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWheatInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.wheatInfo = action.payload[0];
        state.openModal = true;
      })
      .addCase(getWheatInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(enterVisit.pending, (state) => {
        state.loading = true;
      })
      .addCase(enterVisit.fulfilled, (state) => {
        state.loading = false;
        state.disabledEdit = true;
        state.success = true;

      })
      .addCase(enterVisit.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      //   Exist Visit Requests
      .addCase(exitVisit.pending, (state) => {
        state.loading = true;
      })
      .addCase(exitVisit.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(exitVisit.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
    //   Pagenation Requests
    //   .addCase(fetchPagenatedVisitData.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchPagenatedVisitData.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.success = true;
    //     state.visitData = action.payload;
    //   })
    //   .addCase(fetchPagenatedVisitData.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = true;
    //     state.errorMessage = action.error.message;
    //   })
    //   //   Search Requests
    //   .addCase(searchedVisitData.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(searchedVisitData.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.success = true;
    //     state.visitData = action.payload;
    //   })
    //   .addCase(searchedVisitData.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = true;
    //     state.errorMessage = action.error.message;
    //   })
  },

})
export const { closeModal, openScaleModal, closeScaleModal, updataAddFormData, ResetValues, updataEditFormData, setVisitId } = ScaleSlice.actions;
export default ScaleSlice.reducer;