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
export const millData = ['مطاحن بنها', 'مطاحن شبين', 'السلام'];

export const getAllVisits = createAsyncThunk("visits/getAllvisits", async (pageInfo = { pageNumber: 0, size: 10 }, thunkAPI) => {
  console.log(pageInfo, "معلومات الصفحه")
  // const token = localStorage.getItem('token');
  console.log(thunkAPI.getState())
  const token = thunkAPI.getState().auth.userToken
  // console.log(toki, "التوكن")
  let allVisits = await axios({
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://localhost:8080/visits/?pageNumber=${pageInfo.pageNumber}&size=10`,
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
export const getEntityNames = createAsyncThunk('visits/getEntityNames', async (entity, thunkAPI) => {
  console.log('entityType: ', entity)
  const token = thunkAPI.getState().auth.userToken
  console.log(`http://localhost:8080/guard/search-entites/?entityType=${entity.entityType}&dayDate=${entity.dayDate}`)
  let entityNames = await axios({
    method: 'get',
    url: `http://localhost:8080/guard/search-entites/?entityType=${entity.entityType}&dayDate=${entity.dayDate}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
  return entityNames.data;
  // return millData;
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
export const enterVisit = createAsyncThunk('visits/EnterVisit', async (visitTime, thunkAPI) => {
  console.log(visitTime.timeInfo)
  const token = thunkAPI.getState().auth.userToken
  console.log(`http://localhost:8080/guard/add-start-time/${visitTime.visitId}?startTime=${visitTime.timeInfo}`)
  let EnterVisitMethod = await axios({
    method: 'put',
    maxBodyLength: Infinity,
    url: `http://localhost:8080/guard/add-start-time/${visitTime.visitId}?startTime=${visitTime.timeInfo}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return EnterVisitMethod.data
});
export const exitVisit = createAsyncThunk('visits/ExitVisit', async (visitExitTime, thunkAPI) => {
  console.log(visitExitTime, "وقت الخروج")
  console.log(`http://localhost:8080/guard/add-exit-time/${visitExitTime.visitId}?exitTime=${visitExitTime.timeInfo}`)
  const token = thunkAPI.getState().auth.userToken
  let ExitVisitMethod = await axios({
    method: 'put',
    maxBodyLength: Infinity,
    url: `http://localhost:8080/guard/add-exit-time/${visitExitTime.visitId}?exitTime=${visitExitTime.timeInfo}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return ExitVisitMethod.data
});
export const searchedVisitData = createAsyncThunk('visits/searchedVisitData', async (searcheInfo, thunkAPI) => {

  const stringSearch = searcheInfo.searchValue.toString();
  console.log(stringSearch, "ده السيريش")
  console.log(`http://localhost:8080/visits/search/?page=${searcheInfo.pageNumber}&size=10`)
  const token = thunkAPI.getState().auth.userToken;
  console.log(token)
  let allSearchVisits = await axios({
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://localhost:8080/visits/search/?keyword=${stringSearch}&page=0&size=3`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }
  );
  return allSearchVisits.data
});
