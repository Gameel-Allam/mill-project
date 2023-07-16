import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allVisitsData = {
  // (TODO)محتاجين يتضافوا في الFormik
  pageInfo: {
    "current-page": 2,
    "total-items": 1,
    "total-pages": 5
  },
  // محتاج اشيل الحاجات الزيادات
  visits: [
    {
      createdBy: "الحج محمد",
      createdOn: "2023-07-07T15:37:12.675Z",
      lastModifiedBy: 'الحج ابراهيم',
      lastModifiedDate: '2023-07-07T15:37:12.675Z',
      visitId: '1',
      visitReason: 'مشروع تخرج',
      visitType: 'زيارة معدات',

      // محتاجين يتشالوا من ال object of entity (TODO)
      entityId: '0',
      entityName: 'مطاحن بنها',
      entityType: 'مطحن',
      wheatOwnerCardId: '30000000000000',
      // محتاج يحصله expand (TODO)
      drivernames: [''],
      //  الاسماء محتاجه تتغير في كل مكان(TODO)
      cars: [{
        carId: '0',
        carType: 'لها لوحتين أرقام',
        carCondition: 'جيد',
        carName: 'هوندا',
        plateNumbers: ['5655', '3233'],
        // محتاجين نستبدلهم بي خانة واحده
        // firstPlateNumber:'6666',
        // secondPlateNumber:'4444',
        // plateNumbers:'6666/4444',
      }],
      //  الاسماء محتاجه تتغير في كل مكان(TODO)
      visitors: [{ visitorId: '0', visitorName: 'محمد عفيفي', visitorCardId: '30000000000000' }],
    },
    {
      createdBy: "الحج محمد",
      createdOn: "2023-07-07T15:37:12.675Z",
      lastModifiedBy: 'الحج ابراهيم',
      lastModifiedDate: '2023-07-07T15:37:12.675Z',
      visitId: '2',
      visitReason: 'مشروع تخرج',
      visitType: 'زيارة معدات',

      // محتاجين يتشالوا من ال object of entity (TODO)
      entityId: '0',
      entityName: 'مطاحن بنها',
      entityType: 'مطحن',
      wheatOwnerCardId: '30000000000000',
      // محتاج يحصله expand (TODO)
      drivernames: [''],
      //  الاسماء محتاجه تتغير في كل مكان(TODO)
      cars: [{
        carId: '0',
        carType: 'لها لوحتين أرقام',
        carCondition: 'جيد',
        carName: 'هوندا',
        plateNumbers: ['5655', '3233'],
        // محتاجين نستبدلهم بي خانة واحده
        // firstPlateNumber:'6666',
        // secondPlateNumber:'4444',
        // plateNumbers:'6666/4444',
      }],
      //  الاسماء محتاجه تتغير في كل مكان(TODO)
      visitors: [{ visitorId: '0', visitorName: 'محمد شعبان', visitorCardId: '30000000000000' }],
    }
  ],
}
export const visitData = {
  createdBy: "الحج محمد",
  createdOn: "2023-07-07T15:37:12.675Z",
  lastModifiedBy: 'الحج ابراهيم',
  lastModifiedDate: '2023-07-07T15:37:12.675Z',
  visitId: '1',
  visitReason: 'مشروع تخرج',
  visitType: 'زيارة معدات',

  // محتاجين يتشالوا من ال object of entity (TODO)
  entityId: '0',
  entityName: 'مطاحن بنها',
  entityType: 'مطحن',
  wheatOwnerCardId: '30000000000000',
  // محتاج يحصله expand (TODO)
  drivernames: ['محمد محمود'],
  //  الاسماء محتاجه تتغير في كل مكان(TODO)
  cars: [{
    carId: '0',
    carType: 'لها لوحتين أرقام',
    carCondition: 'جيد',
    carName: 'هوندا',
    plateNumbers: [5655, 3233],
    // محتاجين نستبدلهم بي خانة واحده
    // firstPlateNumber:'6666',
    // secondPlateNumber:'4444',
    // plateNumbers:'6666/4444',
  }
  ],
  //  الاسماء محتاجه تتغير في كل مكان(TODO)
  visitors: [{ visitorId: '0', visitorName: 'محمد عفيفي', visitorCardId: '30000000000000' }],
  editables: {
    visitReason: true,
  }
};
export const millData = ['مطاحن بنها', 'مطاحن شبين'];

export const getAllVisits = createAsyncThunk("visits/getAllvisits", async (pageInfo = { pageNumber: 0, size: 10 }, thunkAPI) => {
  console.log(pageInfo, "معلومات الصفحه")
  // const token = localStorage.getItem('token');
  console.log(thunkAPI.getState())
  const token = thunkAPI.getState().auth.userToken
  // console.log(toki, "التوكن")
  let allVisits = await axios({
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://localhost:8080/guard?pageNumber=${pageInfo.pageNumber}&size=10`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  console.log(allVisits.data, "انها الداتا")
  return allVisits.data
  // return allVisitsData;
})
export const getVisit = createAsyncThunk('visits/getVisitData', async (visitId, thunkAPI) => {
  console.log('visist id : ', visitId)
  const token = thunkAPI.getState().auth.userToken
  let visitData = await axios({
    method: 'get',
    url: `http://localhost:8080/guard/${visitId}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  console.log(visitData.data, "الget")
  return visitData.data;
  // return visitData;
});
export const getEntityNames = createAsyncThunk('visits/getEntityNames', async (entityType, thunkAPI) => {
  console.log('entityType: ', entityType)
  const token = thunkAPI.getState().auth.userToken
  console.log(token)
  // let visitData=await axios({
  //   method: 'get',
  //   url: `http://localhost:8080/api/v1/visit/${visitId}`,
  //   headers: { },
  // });
  // return visitData.data;
  return millData;
});
export const editVisitData = createAsyncThunk('visits/editVisitData', async (editedData, thunkAPI) => {
  console.log(thunkAPI.getState())
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
export const AddVisitData = createAsyncThunk('visits/AddvisitData', async (visitData, thunkAPI) => {
  const token = thunkAPI.getState().auth.userToken
  let AddVisitResponse = await axios({
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/guard/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    data: visitData
  });
  console.log(AddVisitResponse.data, "داتا الريسبونس")
  return AddVisitResponse.data;
  // return visitData;
});

// [NEW Feather]
// export const reAddToVisit= createAsyncThunk('visits/editVisitData', async (editedData) => {
//   let editVisitMethod=await axios.patch('',editedData);
//   if(editVisitMethod.data==200){
//     return editedData;
//   }
// });

export const enterVisit = createAsyncThunk('visits/EnterVisit', async (timeNow, thunkAPI) => {
  console.log(timeNow, " وقت الدخول")
  const token = thunkAPI.getState().auth.userToken
  let EnterVisitMethod = await axios({
    method: 'post',
    maxBodyLength: Infinity,
    url: `http://localhost:8080/guard/visitId=${timeNow.visitId}}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    data: timeNow.timeNow
  });
  return EnterVisitMethod.data
});
export const exitVisit = createAsyncThunk('visits/ExitVisit', async (timeNow, thunkAPI) => {
  console.log(timeNow, "وقت الخروج")
  const token = thunkAPI.getState().auth.userToken
  let ExitVisitMethod = await axios({
    method: 'post',
    maxBodyLength: Infinity,
    url: `http://localhost:8080/guard/visitId=${timeNow.visitId}}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    data: timeNow.timeNow
  });
  return ExitVisitMethod.data
});
// export const fetchPagenatedVisitData = createAsyncThunk('visits/fetchVisitData', async (page, ) => {
//   let allVisits = await axios({
//     method: 'get',
//     url: `http://localhost:8080/api/v1/all/${page}`,
//     headers: {},
//     data: page
//   });
//   return allVisits.data

// });
export const searchedVisitData = createAsyncThunk('visits/searchedVisitData', async (searchedKeyWord, thunkAPI) => {
  console.log("searchedKeyWord", searchedKeyWord)
  const token = thunkAPI.getState().auth.userToken;
  console.log(token)
  // let allVisits=await axios({
  //   method: 'get',
  //   url: `http://localhost:8080/api/v1/search?searchTerm=${searchedKeyWord}`,
  //   headers: { },
  //   data : searchedKeyWord
  // })
  return allVisitsData;
});
