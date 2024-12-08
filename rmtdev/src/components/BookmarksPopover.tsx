import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { getBookMarks } from "../features/job.slice";
import useBookMarksJobs from "../hooks/useBookMarksJobs";
import JobList from "./JobList";
import Spinner from "./Spinner";

const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
  const bookMarks = useSelector(getBookMarks);

  const { data, isError, isLoading } = useBookMarksJobs(bookMarks);

  return createPortal(
    <div
      ref={ref}
      className="bookmarks-popover"
      style={
        isLoading
          ? { paddingTop: "40px", paddingBottom: "40px", height: "130px" }
          : {}
      }
    >
      {isLoading && <Spinner />}
      <JobList data={data} isError={isError} isLoading={isLoading} />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
