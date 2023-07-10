import { createSlice } from "@reduxjs/toolkit";
import   {AddVisitData, editVisitData, enterVisit, exitVisit, fetchPagenatedVisitData, getAllVisits, getEntityNames, getVisit, searchedVisitData}  from "./GateActions";
const date = new Date();
const timestamp = date.toISOString();
export const addFormData={
  createdBy: 'الحج محمود',
  createdOn: timestamp,
  visitReason: '',
  visitType: '',
  entityName: '',
  entityType: '',
  wheatOwnerCardId: '',
  drivernames: [''],
  cars: [{
    carType: '',
    carCondition: '',
    carName: '',
    plateNumbers: ['', ''],
  }],
  visitors: [{ visitorName: '', visitorCardId: '' }],
}

const initialState = {
    loading: false,
    success: false,
    error: false,
    errorMessage: "",
    openModal:false,
    gateModal:false,
    visitAllData:  [],
    pageInfo:{},
    visitData: {},
    entityNames: [],
    addFormData:addFormData
}

export const gateSlice = createSlice({
    name: "Gate",
    initialState,
    reducers:{
      closeModal: (state) => {
        state.openModal = false;
      },
      openGateModal: (state) => {
        state.gateModal = true;
      },
      closeGateModal: (state) => {
        state.gateModal = false;
      },
      updataAddFormData: (state, action) => {
        state.addFormData = action.payload;
      },
      ResetValues: (state) => {
        state.addFormData = addFormData;
        console.log("object")
      },
      updataEditFormData: (state, action) => {
        state.visitData = action.payload;
      },
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
            state.pageInfo=action.payload.pageInfo;
          })
          .addCase(getAllVisits.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
          })
          // Fetch a visit by id
          .addCase(getVisit.pending, (state) => {
            state.loading = true;
          })
          .addCase(getVisit.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            console.log("nice")
            state.openModal=true;
            state.visitData = action.payload;
          })
          .addCase(getVisit.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
          })
          // Fetch a Entity data
          .addCase(getEntityNames.pending, (state) => {
            state.loading = true;
          })
          .addCase(getEntityNames.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.entityNames = action.payload;
          })
          .addCase(getEntityNames.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
          })
          // Add visit
          .addCase(AddVisitData.pending, (state) => {
            state.loading = true;
          })
          .addCase(AddVisitData.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.visitAllData.push(action.payload);
            console.log(state.visitAllData,"state.visitData")
          })
          .addCase(AddVisitData.rejected, (state, action) => {
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
              const index = state.visitAllData.findIndex(
              (visit) => visit.visitId === action.payload.visitId
              //   (el) => el.visit.id === action.payload.visit.id
            );
            if (index !== -1) {
                state.visitAllData[index] = action.payload;
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
export const { closeModal,openGateModal,closeGateModal,updataAddFormData,ResetValues,updataEditFormData } = gateSlice.actions;
export default gateSlice.reducer;