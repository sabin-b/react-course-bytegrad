import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  getCurrentPage,
  getSearchTerm,
  getSortByvalue,
} from "../features/job.slice";
import useJobs from "../hooks/useJobs";
import { PAGE_SIZE } from "../utils/constants";
import JobList from "./JobList";
import Pagination from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";

export default function Sidebar() {
  const searchTerm = useSelector(getSearchTerm);
  const { data, isError, isLoading } = useJobs(searchTerm);
  const currentPage = useSelector(getCurrentPage);
  const sortBy = useSelector(getSortByvalue);

  const sortbyItems = useMemo(
    () =>
      data?.jobItems.slice().sort((a, b) => {
        if (sortBy === "relevance") {
          return b.relevanceScore - a.relevanceScore;
        } else if (sortBy === "recent") {
          return a.daysAgo - b.daysAgo;
        }

        return 0;
      }) || [],
    [data?.jobItems, sortBy]
  );

  //? pagination
  const startPage = useMemo(
    () => (currentPage === 1 ? 0 : (currentPage - 1) * PAGE_SIZE + 1),
    [currentPage]
  );
  const endPage = useMemo(
    () => (currentPage === 1 ? PAGE_SIZE : PAGE_SIZE * currentPage + 1),
    [currentPage]
  );

  const jobSlicedItems = useMemo(
    () => sortbyItems.slice(startPage, endPage),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [endPage, sortbyItems, startPage, sortBy]
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount resultCount={data?.jobItems?.length} />
        <Sorting sortBy={sortBy} />
      </div>
      <JobList data={jobSlicedItems} isError={isError} isLoading={isLoading} />
      <Pagination totalItems={data?.jobItems?.length} />
    </div>
  );
}
