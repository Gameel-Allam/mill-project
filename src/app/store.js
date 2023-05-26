import { configureStore } from "@reduxjs/toolkit";
import  gateSlice  from "../features/gate/GateSlice";

export const store = configureStore({
  reducer: {
    gate:gateSlice
  },
})