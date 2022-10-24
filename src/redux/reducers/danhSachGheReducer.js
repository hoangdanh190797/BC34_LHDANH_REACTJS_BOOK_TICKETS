//rxslice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../ticketBooking/danhSachGhe.json";

// console.log(data);

const initialState = {
  dsGhe: [data],
};

const danhSachGheReducer = createSlice({
  name: "danhSachGheReducer",
  initialState,
  reducers: {
    
  },
});

export const {} = danhSachGheReducer.actions;

export default danhSachGheReducer.reducer;
