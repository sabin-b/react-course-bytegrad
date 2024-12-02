import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface IJobSlice {
  searchTerm: string;
  activeJobId: number | null;
}

const initialState: IJobSlice = {
  searchTerm: "",
  activeJobId: null,
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    addSearchTerm(
      state: IJobSlice,
      action: PayloadAction<IJobSlice["searchTerm"]>
    ) {
      state.searchTerm = action.payload;
    },
    clearSearchTerm(state: IJobSlice) {
      state.searchTerm = "";
    },
    addActiveJobId(
      state: IJobSlice,
      action: PayloadAction<IJobSlice["activeJobId"]>
    ) {
      state.activeJobId = action.payload;
    },
  },
});

export const { addSearchTerm, clearSearchTerm, addActiveJobId } =
  jobSlice.actions;
export const jobReducer = jobSlice.reducer;

export const jobState = (state: RootState) => state.jobs;

export const getSearchTerm = createSelector(
  [jobState],
  (state) => state.searchTerm
);

export const getActiveJobId = createSelector(
  [jobState],
  (state) => state.activeJobId
);
