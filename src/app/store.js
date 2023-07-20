import { configureStore } from "@reduxjs/toolkit";
import gateSlice from "../features/gate/GateSlice";
import ScaleSlice from "../features/scale/ScaleSlice";
import authReducer from "../features/login/authSlice";
import ManagerSlice from "../features/manager/ManagerSlice";
import ReviewerReducer from "../features/reviewer/ReviewerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    gate: gateSlice,
    scale: ScaleSlice,
    reviewer: ReviewerReducer,
    manager: ManagerSlice,
  },
});
