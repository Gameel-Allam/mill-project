import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// let data=[
//     {
//      visit:{
//        visitReason:'مشروع تخرج', //ok
//        driverName:'جميل علام', //ok
//        visitType:'زيارة عادية', //ok
//      },
//      visitor:{
//        cardId:'30000000000000', //identityCard ==>visitor.cardId
//        name:'محمد عفيفي'   //visitorName ==> visitor.name
//      },
//      entity:{
//        name:'مطاحن بنها',  // new fieldAdd sourcePlace  هل دروب داون ولا انبت عادي
//        entityType:'مطاحن' //types is known in srs sourcePlace ==> entity.entityType
//      },
//      car:{
//        type:'سيارة قمح',  //from srs new field
//        condition:'جيدة', //radio field
//        name:'هوندا', //carType =>car.name
//        firstPlateNumber:'4444',
//        secondPlateNumber:'3333' //secind num
//      }
//     }
//    ]
export const getAllVisits=createAsyncThunk("visits/getAllvisits",async()=>{
    let allVisits=await axios.get('');
    return allVisits.data
})

export const editVisitData = createAsyncThunk('visits/editVisitData', async (editedData) => {
  let editVisitMethod=await axios.patch('',editedData);
  if(editVisitMethod.data==200){
    return editedData;
  }
});
// [NEW Feather]
// export const reAddToVisit= createAsyncThunk('visits/editVisitData', async (editedData) => {
//   let editVisitMethod=await axios.patch('',editedData);
//   if(editVisitMethod.data==200){
//     return editedData;
//   }
// });

export const enterVisit = createAsyncThunk('visits/EnterVisit', async () => {
  let EnterVisitMethod=await axios.post('');
  return EnterVisitMethod.data
});
export const exitVisit = createAsyncThunk('visits/ExitVisit', async () => {
  let ExitVisitMethod=await axios.post('');
  return ExitVisitMethod.data
});
export const fetchPagenatedVisitData = createAsyncThunk('visits/fetchVisitData', async (page) => {
  let allVisits=await axios.post('',page);
  return allVisits.data
});
export const searchedVisitData = createAsyncThunk('visits/fetchSearchVisitData', async (searchedKeyWord) => {
  let allVisits=await axios.post('',searchedKeyWord);
  return allVisits.data
});