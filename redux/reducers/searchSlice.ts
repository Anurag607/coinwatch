import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchParams: "",
  },
  reducers: {
    setSearchParams: (state, action) => {
      state.searchParams = action.payload;
    },
    clearSearchParams: (state) => {
      state.searchParams = "";
    },
  },
});

export const { setSearchParams, clearSearchParams } = searchSlice.actions;

export default searchSlice.reducer;
