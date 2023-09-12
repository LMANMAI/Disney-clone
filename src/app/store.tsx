import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});
