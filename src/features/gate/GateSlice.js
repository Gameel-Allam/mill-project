import { createSlice } from "@reduxjs/toolkit";
import   {AddVisitData, editVisitData, enterVisit, exitVisit, fetchPagenatedVisitData, getAllVisits, searchedVisitData}  from "./GateActions";



const initialState = {
    loading: false,
    success: false,
    error: false,
    errorMessage: "",
    visitData:  [
      {
         visitId:7,
         visitReason:'مشروع تخرج', //ok
         visitType:'زيارة عادية', //ok
   
       visitor:{
         cardId:'30000000000000', //identityCard ==>visitor.cardId
         name:'محمد عفيفي'   //visitorName ==> visitor.name
       },
       entity:{
         name:'مطاحن بنها',  // new fieldAdd sourcePlace  هل دروب داون ولا انبت عادي
         entityType:'مطاحن' //types is known in srs sourcePlace ==> entity.entityType
       },
       car:{
         type:'سيارة قمح',  //from srs new field
         condition:'جيدة', //radio field
         name:'هوندا', //carType =>car.name
         firstPlateNumber:'4444',
         driverName:'جميل علام', //ok
         secondPlateNumber:'3333' //secind num
       }
      },
      {
       visitId:3,
       visitReason:' دخول معدات', //ok
       visitType:'زيارة معدات', //ok
   
     visitor:{
       cardId:'70000000000000', //identityCard ==>visitor.cardId
       name:'محمد محمد'   //visitorName ==> visitor.name
     },
     entity:{
       name:'مطاحن شبين',  // new fieldAdd sourcePlace  هل دروب داون ولا انبت عادي
       entityType:'مطاحن' //types is known in srs sourcePlace ==> entity.entityType
     },
     car:{
       type:'سيارة معدات',  //from srs new field
       condition:'جيدة', //radio field
       name:'هوندا', //carType =>car.name
       firstPlateNumber:'6666',
       driverName:'جميل مصطفي', //ok
       secondPlateNumber:'5555' //secind num
     }
    }
     ],
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
          // Add visit
          .addCase(AddVisitData.pending, (state) => {
            state.loading = true;
          })
          .addCase(AddVisitData.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.visitData.push(action.payload);
            console.log(state.visitData,"state.visitData")
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