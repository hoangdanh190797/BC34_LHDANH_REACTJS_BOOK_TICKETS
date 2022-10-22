//rxslice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../ticketBooking/danhSachGhe.json"

console.log(data);

const initialState = {};
 
const danhSachGheReducer = createSlice({
  name: "dsGheReducer",
  initialState,
  reducers: {},
});

export const {} = danhSachGheReducer.actions;

export default danhSachGheReducer.reducer;
