import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      console.log(typeof state); // Should log "object"
      console.log(typeof action.payload); // Should log "object"

      state = { ...state, ...action.payload };

      //   state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
