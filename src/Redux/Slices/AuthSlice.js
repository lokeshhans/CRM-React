import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    role: localStorage.getItem("role") || " ",
    data: localStorage.getItem("userData") || null,
    isLoggedIn: !!localStorage.getItem("userData") || false
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
});
export default authSlice.reducer;