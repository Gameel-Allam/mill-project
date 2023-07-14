import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


export const enterVisit = createAsyncThunk('visits/EnterVisit', async (timeNow) => {
    console.log(timeNow," وقت الدخول")
    // let EnterVisitMethod=await axios('');
    // return EnterVisitMethod.data
  });
  export const exitVisit = createAsyncThunk('visits/ExitVisit', async (timeNow) => {
    console.log(timeNow,"وقت الخروج")
    // let ExitVisitMethod=await axios({
    //   method: 'put',
    //   url: `http://localhost:8080/api/v1/addExitTime/${VisitId}`,
    //   headers: { }
    // });
    // return ExitVisitMethod.data
  });