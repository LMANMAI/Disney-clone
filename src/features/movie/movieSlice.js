import { createSlice } from "@reduxjs/toolkit";

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
export const selectRecommended = (state) => state.movie.recommended;
export const selectNewdisney = (state) => state.movie.newdisney;
export const selectOriginals = (state) => state.movie.originals;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
