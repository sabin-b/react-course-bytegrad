import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookMark,
  getJobIdExistsInBookMark,
  removeBookMark,
} from "../features/job.slice";
import { AppDispatch, RootState } from "../store/store";

interface BookmarkIconProps {
  jobId: number;
}

export default function BookmarkIcon({ jobId }: BookmarkIconProps) {
  const dispatch: AppDispatch = useDispatch();

  const isAlreadyExists = useSelector((state: RootState) =>
    getJobIdExistsInBookMark(state, jobId)
  );

  //? handle bookMarking
  function handleBookMark(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    jobId: number
  ) {
    //? prevent bubbling face
    e.stopPropagation();

    //? prevent default behaviour
    e.preventDefault();

    //? if already exists
    if (isAlreadyExists) {
      dispatch(removeBookMark(jobId));
    }
    //? else add it
    else {
      dispatch(addBookMark(jobId));
    }
  }

  return (
    <button onClick={(e) => handleBookMark(e, jobId)} className="bookmark-btn">
      <BookmarkFilledIcon className={`${isAlreadyExists ? "filled" : ""}`} />
    </button>
  );
}
