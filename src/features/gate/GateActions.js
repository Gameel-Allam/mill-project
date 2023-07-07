import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allVisitsData= {
  // (TODO)محتاجين يتضافوا في الFormik
  pageInfo:{
    "current-page": '0',
    "total-items": '1',
    "total-pages": '1'
  },
  // محتاج اشيل الحاجات الزيادات
  visits:[
    {
    createdBy:"الحج محمد",
    createdOn: "2023-07-07T15:37:12.675Z",
    lastModifiedBy:'الحج ابراهيم',
    lastModifiedDate:'2023-07-07T15:37:12.675Z',
    visitId:'1',
    visitReason:'مشروع تخرج', 
    visitType:'زيارة عادية', 

  // محتاجين يتشالوا من ال object of entity (TODO)
    entityId:'0',
    entityName:'مطاحن بنها',  
    entityType:'مطاحن' ,
  // محتاج يحصله expand (TODO)
  drivernames:[''],
//  الاسماء محتاجه تتغير في كل مكان(TODO)
  cars:[{
    carId:'0',
    carType:'سيارة معدات',  
    carCondition:'جيدة', 
    carName:'هوندا', 
    plateNumber:['5655','3233'], 
    // محتاجين نستبدلهم بي خانة واحده
    // firstPlateNumber:'6666',
    // secondPlateNumber:'4444',
    // plateNumbers:'6666/4444',
  }],
  //  الاسماء محتاجه تتغير في كل مكان(TODO)
  visitors:[{visitorId:'0',visitorName:'محمد عفيفي',visitorCardId:'30000000000000'}],
   }
  ],
  }
 export const visitData={
  createdBy:"الحج محمد",
  createdOn: "2023-07-07T15:37:12.675Z",
  lastModifiedBy:'الحج ابراهيم',
  lastModifiedDate:'2023-07-07T15:37:12.675Z',
  visitId:'1',
  visitReason:'مشروع تخرج', 
  visitType:'زيارة عادية', 

// محتاجين يتشالوا من ال object of entity (TODO)
  entityId:'0',
  entityName:'مطاحن بنها',  
  entityType:'مطاحن' ,
// محتاج يحصله expand (TODO)
drivernames:[''],
//  الاسماء محتاجه تتغير في كل مكان(TODO)
cars:[{
  carId:'0',
  carType:'سيارة معدات',  
  carCondition:'جيدة', 
  carName:'هوندا', 
  plateNumber:['5655','3233'], 
  // محتاجين نستبدلهم بي خانة واحده
  // firstPlateNumber:'6666',
  // secondPlateNumber:'4444',
  // plateNumbers:'6666/4444',
}],
//  الاسماء محتاجه تتغير في كل مكان(TODO)
visitors:[{visitorId:'0',visitorName:'محمد عفيفي',visitorCardId:'30000000000000'}],
 };

export const getAllVisits=createAsyncThunk("visits/getAllvisits",async()=>{
    // let allVisits=await axios({
    //   method: 'get',
    //   url: 'http://localhost:8080/api/v1/all/',
    //   headers: { },
    // });
    // return allVisits.data
    return allVisitsData;
})
export const getVisit = createAsyncThunk('visits/getVisitData', async (visitId) => {
  console.log('visist id : ',visitId)
  // let visitData=await axios({
  //   method: 'get',
  //   url: `http://localhost:8080/api/v1/visit/${visitId}`,
  //   headers: { },
  // });
  // return visitData.data;
  return visitData;
});
export const editVisitData = createAsyncThunk('visits/editVisitData', async (editedData) => {
  // send 
  // console.log("editi",editedData)
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
