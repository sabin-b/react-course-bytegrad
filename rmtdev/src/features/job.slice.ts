import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { SortBy } from "../types/types";

interface IJobSlice {
  searchTerm: string;
  activeJobId: number | null;
  currentPage: number;
  sortBy: SortBy;
  bookMarks: number[];
}

const bookMarksLocalStorageKey = "bookMarks";

const initialState: IJobSlice = {
  searchTerm: "",
  activeJobId: null,
  currentPage: 1,
  sortBy: "relevance",
  bookMarks: JSON.parse(localStorage.getItem(bookMarksLocalStorageKey)!) || [],
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
    movePreviousPage(
      state: IJobSlice
      // action: PayloadAction<IJobSlice["currentPage"]>
    ) {
      if (state.currentPage === 1) {
        state.currentPage = 1;
      } else if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    moveNextPage(
      state: IJobSlice
      // action: PayloadAction<IJobSlice["currentPage"]>
    ) {
      state.currentPage += 1;
    },

    //? sortby
    addSortByFilter(
      state: IJobSlice,
      action: PayloadAction<IJobSlice["sortBy"]>
    ) {
      state.sortBy = action.payload;
      state.currentPage = 1;
    },

    //? add bookMark
    addBookMark(state: IJobSlice, action: PayloadAction<number>) {
      state.bookMarks.push(action.payload);

      //? update in localstorage
      localStorage.setItem(
        bookMarksLocalStorageKey,
        JSON.stringify(state.bookMarks)
      );
    },

    //? remove bookMark
    removeBookMark(state: IJobSlice, action: PayloadAction<number>) {
      const bookMarkId = action.payload;

      if (state.bookMarks.includes(bookMarkId)) {
        console.log("before", state.bookMarks);

        //? find index
        const index = state.bookMarks.indexOf(bookMarkId);

        //? remove bookMark Id
        state.bookMarks.splice(index, 1);

        //? update in localstorage
        localStorage.setItem(
          bookMarksLocalStorageKey,
          JSON.stringify(state.bookMarks)
        );
      }
    },
  },
});

export const {
  addSearchTerm,
  clearSearchTerm,
  addActiveJobId,
  moveNextPage,
  movePreviousPage,
  addSortByFilter,
  addBookMark,
  removeBookMark,
} = jobSlice.actions;

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

export const getCurrentPage = createSelector([jobState], (s) => s.currentPage);

export const getSortByvalue = createSelector([jobState], (s) => s.sortBy);

export const getBookMarks = createSelector([jobState], (s) => s.bookMarks);

export const getJobIdExistsInBookMark = createSelector(
  [jobState, (_, id: number): number => id],
  (state, id) => state.bookMarks.includes(id)
);
