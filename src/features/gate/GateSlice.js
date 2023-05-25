import { createSlice } from "@reduxjs/toolkit";
import   {editVisitData, enterVisit, exitVisit, getAllVisits}  from "./GateActions";



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
          .addCase(editVisitData.pending, (state) => {
            state.loading = true;
          })
          .addCase(editVisitData.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            // Find the edited visit in the state and replace it with the updated data
            // محتاج تتعدل علشان اشرف باشا مكسل شوية
            const index = state.visitData.findIndex(
              (el) => el.visitId === action.payload.visitId
            //   (el) => el.visit.id === action.payload.visit.id
            );
            if (index !== -1) {
              state.visitData[index] = action.payload;
            }
          })
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
      },
        
})
export default gateSlice.reducer;