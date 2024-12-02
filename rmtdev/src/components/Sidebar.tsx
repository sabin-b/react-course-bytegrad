import { useSelector } from "react-redux";
import { getSearchTerm } from "../features/job.slice";
import useJobs from "../hooks/useJobs";
import JobList from "./JobList";
import Pagination from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";

export default function Sidebar() {
  const searchTerm = useSelector(getSearchTerm);
  const { data, isError, isLoading } = useJobs(searchTerm);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount resultCount={data?.jobItems?.length} />
        <Sorting />
      </div>
      <JobList data={data?.jobItems} isError={isError} isLoading={isLoading} />
      <Pagination />
    </div>
  );
}
