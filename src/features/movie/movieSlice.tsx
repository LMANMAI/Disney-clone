import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  recommended: null,
  newdisney: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.newdisney = action.payload.newdisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectRecommended = (state: RootState) => state.movie.recommended;
export const selectNewdisney = (state: RootState) => state.movie.newdisney;
export const selectOriginals = (state: RootState) => state.movie.originals;
export const selectTrending = (state: RootState) => state.movie.trending;

export default movieSlice.reducer;
