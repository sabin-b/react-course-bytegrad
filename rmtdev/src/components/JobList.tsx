import { JobItem } from "../types/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

interface JobListProps {
  isLoading: boolean;
  isError: boolean;
  data: JobItem[];
}
export function JobList({ data, isLoading, isError }: JobListProps) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        !isError &&
        data.length > 0 &&
        data.map((jobItem) => <JobListItem key={jobItem.id} {...jobItem} />)}
    </ul>
  );
}

export default JobList;
