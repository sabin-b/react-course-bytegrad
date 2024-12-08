import { useDispatch } from "react-redux";
import { addSortByFilter } from "../features/job.slice";
import { AppDispatch } from "../store/store";
import { SortBy } from "../types/types";

type SortingProps = {
  sortBy: SortBy;
};

export default function Sorting({ sortBy }: SortingProps) {
  const dispatch: AppDispatch = useDispatch();

  function handleSortBy(value: SortBy) {
    dispatch(addSortByFilter(value));
  }

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button
        onClick={() => handleSortBy("relevance")}
        className={`sorting__button sorting__button--relevant ${
          sortBy === "relevance" ? "sorting__button--active" : ""
        }`}
      >
        Relevant
      </button>

      <button
        onClick={() => handleSortBy("recent")}
        className={`sorting__button sorting__button--recent ${
          sortBy === "recent" ? "sorting__button--active" : ""
        }`}
      >
        Recent
      </button>
    </section>
  );
}
