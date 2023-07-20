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