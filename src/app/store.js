import { configureStore } from "@reduxjs/toolkit";
import  gateSlice  from "../features/gate/GateSlice";
import ManagerSlice from "../features/manager/ManagerSlice";

export const store = configureStore({
  reducer: {
    gate:gateSlice,
    manager:ManagerSlice
  },
})