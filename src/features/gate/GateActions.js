import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const data= [
  {
     visitId:7,
     visitReason:'مشروع تخرج', //ok
     visitType:'زيارة عادية', //ok

   visitor:{
     cardId:'30000000000000', //identityCard ==>visitor.cardId
     name:'محمد محمد عفيفي'   //visitorName ==> visitor.name
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
 ]
export const getAllVisits=createAsyncThunk("visits/getAllvisits",async()=>{
    // let allVisits=await axios({
    //   method: 'get',
    //   url: 'http://localhost:8080/api/v1/all/',
    //   headers: { },
    // });
    // return allVisits.data
    return data;
})

export const editVisitData = createAsyncThunk('visits/editVisitData', async (editedData) => {
  // let editVisitMethod=await axios({
  //   method: 'put',
  //   url: `http://localhost:8080/api/v1/editVisit/${editedData.VisitId}`,
  //   headers: { 
  //     'Content-Type': 'application/json'
  //   },
  //   data : editedData
  // });
  // if(editVisitMethod.data==200){
    return editedData;
  // }
});
export const AddVisitData = createAsyncThunk('visits/AddvisitData', async (visitData) => {
  // let AddVisitResponse=await axios({
  //   method: 'post',
  //   url: 'http://localhost:8080/api/v1/addVisit/',
  //   headers: { 
  //     'Content-Type': 'application/json'
  //   },
  //   data : visitData
  // });
  //   return AddVisitResponse.data;
  return visitData;
});

// [NEW Feather]
// export const reAddToVisit= createAsyncThunk('visits/editVisitData', async (editedData) => {
//   let editVisitMethod=await axios.patch('',editedData);
//   if(editVisitMethod.data==200){
//     return editedData;
//   }
// });

export const enterVisit = createAsyncThunk('visits/EnterVisit', async () => {
  let EnterVisitMethod=await axios('');
  return EnterVisitMethod.data
});
export const exitVisit = createAsyncThunk('visits/ExitVisit', async (VisitId) => {
  let ExitVisitMethod=await axios({
    method: 'put',
    url: `http://localhost:8080/api/v1/addExitTime/${VisitId}`,
    headers: { }
  });
  return ExitVisitMethod.data
});
export const fetchPagenatedVisitData = createAsyncThunk('visits/fetchVisitData', async (page) => {
  let allVisits=await axios({
    method: 'get',
    url: `http://localhost:8080/api/v1/all/${page}`,
    headers: { },
    data : page
  });
  return allVisits.data
  
});
export const searchedVisitData = createAsyncThunk('visits/fetchSearchVisitData', async (searchedKeyWord) => {
  let allVisits=await axios({
    method: 'get',
    url: `http://localhost:8080/api/v1/search?searchTerm=${searchedKeyWord}`,
    headers: { },
    data : searchedKeyWord
  })
  return allVisits.data
});
