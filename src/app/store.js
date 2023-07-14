import { configureStore } from "@reduxjs/toolkit";
import gateSlice from "../features/gate/GateSlice";
import authReducer from "../features/login/authSlice";

export const store = configureStore({
  reducer: {
    gate: gateSlice,
    auth: authReducer,
  },
});
