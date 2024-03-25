import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: [],
  reducers: {
    addResult: (state, { payload }) => {
      return payload;
    },
  },
});

export const { addResult } = resultSlice.actions;
export default resultSlice.reducer;
