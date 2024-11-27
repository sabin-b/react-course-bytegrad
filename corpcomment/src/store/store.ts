import { configureStore } from "@reduxjs/toolkit";
import { feedbackReducer } from "../features/feedback.slice";

const store = configureStore({
  reducer: {
    feedbacks: feedbackReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
