import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../config/axiaosInstance";

const initialState = {
  ticketList: [],
};

export const getAllTicketsForTheUser = createAsyncThunk(
  "ticket/getAllTicketsForTheUser",
  async () => {
    try {
      const response = axiosInstance.get("getMyAssignedTickets", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      toast.promise(response,{
        success:"Sucessfull loaded all the tickets",
        loading:"tickets are loading",
        error:"something wrong "
      });
      return await response;
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }
);

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTicketsForTheUser.fulfilled,(state,action) =>{
        if(!action?.payload?.data) return;
        state.ticketList = action?.payload?.data?.result;
    });
  },
});
export default ticketSlice.reducer;
