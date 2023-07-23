import { configureStore } from "@reduxjs/toolkit";
import gateSlice from "../features/gate/GateSlice";
import ScaleSlice from "../features/scale/ScaleSlice";
import authReducer from "../features/login/authSlice";
import ManagerSlice from "../features/manager/ManagerSlice";
import mainReducer from "../features/main/mainSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    gate: gateSlice,
    scale: ScaleSlice,
    main: mainReducer,
    manager: ManagerSlice,
  },
});
