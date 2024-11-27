import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface FeedbackSlice {
  selectedCompany: string;
}

const initialState: FeedbackSlice = {
  selectedCompany: "",
};

const feedBackSlice = createSlice({
  initialState,
  name: "feedbacks",
  reducers: {
    addCompany(state: FeedbackSlice, action: PayloadAction<string>) {
      state.selectedCompany = action.payload;
    },
    removeFilter(state: FeedbackSlice) {
      state.selectedCompany = "";
    },
  },
});

export const feedbackReducer = feedBackSlice.reducer;
export const { addCompany, removeFilter } = feedBackSlice.actions;

const feedbackState = (state: RootState) => state.feedbacks;

export const getSelectedCompany = createSelector(
  [feedbackState],
  (f) => f.selectedCompany
);
