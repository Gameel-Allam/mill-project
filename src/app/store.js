import { configureStore } from "@reduxjs/toolkit";
import gateSlice from "../features/gate/GateSlice";
import ScaleSlice from "../features/scale/ScaleSlice";
import authReducer from "../features/login/authSlice";

export const store = configureStore({
  reducer: {
    gate: gateSlice,
    scale: ScaleSlice,
    auth: authReducer,
  },
});
