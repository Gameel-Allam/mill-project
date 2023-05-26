import { createSlice } from "@reduxjs/toolkit";
import   {editVisitData, enterVisit, exitVisit, fetchPagenatedVisitData, getAllVisits, searchedVisitData}  from "./GateActions";



const initialState = {
    loading: false,
    success: false,
    error: false,
    errorMessage: "",
    visitData: [],
}

export const gateSlice = createSlice({
    name: "Gate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getAllVisits.pending, (state) => {
            state.loading = true;
          })
          .addCase(getAllVisits.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.visitData = action.payload;
          })
          .addCase(getAllVisits.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
          })
        //   Edit visit Requests
          .addCase(editVisitData.pending, (state) => {
            state.loading = true;
          })
          .addCase(editVisitData.fulfilled, (state, action) => {
              state.loading = false;
              state.success = true;
              // Find the edited visit in the state and replace it with the updated data
              // محتاج تتعدل علشان اشرف باشا مكسل شوية
              const index = state.visitData.findIndex(
              (visit) => visit.visitId === action.payload.visitId
              //   (el) => el.visit.id === action.payload.visit.id
            );
            if (index !== -1) {
                state.visitData[index] = action.payload;
            }
        })
        .addCase(editVisitData.rejected, (state, action)  => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
        })

        //   adding More than one vistor with all attibutes to same visit handeled by id [NEW Feather add to logic]

        //   .addCase(reAddToVisit.pending, (state) => {
        //     state.loading = true;
        //   })
        //   .addCase(reAddToVisit.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.success = true;
        //     // Find the edited visit in the state and replace it with the updated data
        //     // محتاج تتعدل علشان اشرف باشا مكسل شوية
        //     const index = state.visitData.findIndex(
        //       (el) => el.visitId === action.payload.visitId
        //     //   (el) => el.visit.id === action.payload.visit.id
        //     );
        //     if (index !== -1) {
        //       state.visitData[index] = action.payload;
        //     }
        //   })
        //   .addCase(reAddToVisit.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = true;
        //     state.errorMessage = action.error.message;
        //   })
        //   Enter Visit to silo Requests
          .addCase(enterVisit.pending, (state) => {
            state.loading = true;
          })
          .addCase(enterVisit.fulfilled, (state) => {
            state.loading = false;
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
          .addCase(fetchPagenatedVisitData.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchPagenatedVisitData.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.visitData = action.payload;
          })
          .addCase(fetchPagenatedVisitData.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.error.message;
          })
          //   Search Requests
          .addCase(searchedVisitData.pending, (state) => {
            state.loading = true;
          })
          .addCase(searchedVisitData.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.visitData = action.payload;
          })
          .addCase(searchedVisitData.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.error.message;
          })
      },
        
})
export default gateSlice.reducer;