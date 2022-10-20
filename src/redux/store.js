import { configureStore } from "@reduxjs/toolkit";
import danhSachGheReducer from "./reducers/danhSachGheReducer";

export const store = configureStore({
  reducer: {
    danhSachGheReducer,
  },
});
