import { configureStore } from "@reduxjs/toolkit";
import { jobReducer } from "../features/job.slice";

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

//? types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
