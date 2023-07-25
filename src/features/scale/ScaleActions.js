import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import axios from "axios";
export const scaleAllData = {
  "visits": [
    {
      "visitId": 8,
      "visitType": "زيارة قمح محلي وارد",
      "visitors": [
        {
          "visitorId": 6,
          "visitorCardId": "12345678901134",
          "visitorName": "وليد"
        },
        {
          "visitorId": 7,
          "visitorCardId": "13445678901234",
          "visitorName": "وائل"
        }
      ],
      "cars": [],
      "actualWeight": null,
      "shippedWeight": null,
      "acceptedOrRejected": null,
      "entityName": "السلام",
      "entityType": "مطحن",
      "createdBy": null,
      "createdOn": null
    }
  ],
  "pageInfo": {
    "total-items": 1,
    "total-pages": 1,
    "current-page": 0
  }
}
export const wheatInfo = [
  {
    "programId": 8,
    "wheatId": 7,
    "wheatType": "محلي",
    "cleanlinessDegree": "23.5",
    "tripDate": null,
    "releasePermission": null,
    "shipName": null,
    "importedWheatType": null,
    "determinedWeight": 1000.0
  }

]
export const getAllVisits = createAsyncThunk("visits/getAllvisits", async (pageInfo = { pageNumber: 0, size: 10 }, thunkAPI) => {
  console.log(pageInfo, "معلومات الصفحه")
  // const token = localStorage.getItem('token');
  console.log(thunkAPI.getState())
  const token = thunkAPI.getState().auth.userToken
  // console.log(toki, "التوكن")
  let allVisits = await axios({
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://localhost:8080/wheat-visit/?pageNumber=${pageInfo.pageNumber}&size=10`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  console.log(allVisits.data, "scale data")
  return allVisits.data
})
export const getAllMills = createAsyncThunk("visits/getAllMills", async (pageInfo = { pageNumber: 0, size: 10 }, thunkAPI) => {
  console.log(pageInfo, "معلومات الصفحه")
  console.log(thunkAPI.getState())
  const token = thunkAPI.getState().auth.userToken
  // console.log(toki, "التوكن")
  let allVisits = await axios({
    method: 'get',
    maxBodyLength: Infinity,
    url: ` http://localhost:8080/scaledepartment/get-mills/`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  console.log(allVisits.data, "mills data")
  return allVisits.data
})
export const enterVisit = createAsyncThunk('visits/EnterVisit', async (timeNow) => {
  console.log(timeNow, " وقت الدخول")
  // let EnterVisitMethod=await axios('');
  // return EnterVisitMethod.data
});
export const exitVisit = createAsyncThunk('visits/ExitVisit', async (timeNow) => {
  console.log(timeNow, "وقت الخروج")
  // let ExitVisitMethod=await axios({
  //   method: 'put',
  //   url: `http://localhost:8080/api/v1/addExitTime/${VisitId}`,
  //   headers: { }
  // });
  // return ExitVisitMethod.data
});
export const getWheatInfo = createAsyncThunk('visits/getWheat', async (wheat) => {
  console.log("الي جاي من الميزان انادي بيه", wheat)
  // const token = thunkAPI.getState().auth.userToken
  // let wheatInfo = await axios({
  //   method: 'get',
  //   url: `http://localhost:8080/scaledepartment/search-wheat/?entityType=${wheat.entityType}&entityName=${wheat.entityName}&dayDate=${wheat.dateToday}`,
  //   headers: {
  //     'Authorization': `Bearer ${token}`
  //   },
  // });
  // console.log(wheatInfo.data, "القمح")
  // return wheatInfo.data;
  return wheatInfo;
});
export const addToWheatVisit = createAsyncThunk('visits/addToWheatVisit', async (scaleData, thunkAPI) => {
  console.log(scaleData, "الي جاي من الميزان انادي بيه")
  const token = thunkAPI.getState().auth.userToken
  let wheatInfo = await axios({
    method: 'post',
    url: `http://localhost:8080/scaledepartment/${scaleData.visitId}`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: scaleData
  });
  console.log(wheatInfo.data, "القمح")
  return wheatInfo.data;
  // return scaleData;
});
// 