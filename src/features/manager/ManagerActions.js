import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const allcellsData = [
  {
    id: 1,
    name: "معلومات الخلية 1",
    type: "ايريكا",
    capacity: "4000 طن",
    progress: 45,
  },
  {
    id: 2,
    name: "معلومات الخلية 2",
    type: "ايريكا",
    capacity: "6000 طن",
    progress: 60,
  },
  {
    id: 3,
    name: "معلومات الخلية 3",
    type: "ايريكا",
    capacity: "2500 طن",
    progress: 25,
  },
  {
    id: 4,
    name: "معلومات الخلية 4",
    type: "ايريكا",
    capacity: "7000 طن",
    progress: 80,
  },
  {
    id: 5,
    name: "معلومات الخلية 5",
    type: "ايريكا",
    capacity: "6000 طن",
    progress: 60,
  },
  {
    id: 6,
    name: "معلومات الخلية 6",
    type: "ايريكا",
    capacity: "6500 طن",
    progress: 70,
  },
  {
    id: 7,
    name: "معلومات الخلية 7",
    type: "ايريكا",
    capacity: "2800 طن",
    progress: 33,
  },
  {
    id: 8,
    name: "معلومات الخلية 8",
    type: "ايريكا",
    capacity: "2000 طن",
    progress: 45,
  },
  {
    id: 9,
    name: "معلومات الخلية 9",
    type: "ايريكا",
    capacity: "1000 طن",
    progress: 10,
  },
  {
    id: 10,
    name: "معلومات الخلية 10",
    type: "ايريكا",
    capacity: "1300 طن",
    progress: 13,
  },
  {
    id: 11,
    name: "معلومات الخلية 11",
    type: "ايريكا",
    capacity: "5000 طن",
    progress: 50,
  },
  {
    id: 12,
    name: "معلومات الخلية 12",
    type: "ايريكا",
    capacity: "6500 طن",
    progress: 67,
  },
];
// export const cellDetails = {};

export const getAllCells = createAsyncThunk(
  "cells/getAllCells",
  async (_, thunkAPI) => {
    console.log(thunkAPI.getState());
    const token = thunkAPI.getState().auth.userToken;
    console.log(token);
    // let allVisits=await await axios({
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: `http://localhost:8080/manager/cells`,
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // });
    // return allVisits.data;
    return allcellsData;
  }
);
export const getCell = createAsyncThunk("visits/getCell", async (cellId) => {
  console.log("visist id : ", cellId);
  // let visitData=await axios({
  //   method: 'get',
  //   url: `http://localhost:8080/api/v1/visit/${visitId}`,
  //   headers: { },
  // });
  // return visitData.data;
  // return cellDetails;
});
