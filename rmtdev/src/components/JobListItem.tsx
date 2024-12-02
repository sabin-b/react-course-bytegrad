import { useDispatch, useSelector } from "react-redux";
import { addActiveJobId, getActiveJobId } from "../features/job.slice";
import { AppDispatch } from "../store/store";
import { JobItem } from "../types/types";
import BookmarkIcon from "./BookmarkIcon";

type JobListItemProps = JobItem;
export default function JobListItem({
  id,
  title,
  badgeLetters,
  company,
  daysAgo,
}: JobListItemProps) {
  const dispatch: AppDispatch = useDispatch();
  const activeJobId = useSelector(getActiveJobId);
  // //? handle item click
  // function handleItemClick(e: React.MouseEvent<HTMLLIElement>) {
  //   //?prevent page reloading
  //   e.preventDefault();
  //   //? create url structure
  //   const newUrl = `/${id}`;
  //   //? update it
  //   window.history.pushState({ id }, "", newUrl);
  // }

  function handleItemClick() {
    dispatch(addActiveJobId(id));
  }

  return (
    <li
      onClick={handleItemClick}
      className={`job-item ${activeJobId === id ? "job-item--active" : ""}`}
    >
      <a href={`#${id}`} className="job-item__link">
        <div className="job-item__badge">{badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{title}</h3>
          <p className="job-item__company">{company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">
            {daysAgo?.toString().concat("d")}
          </time>
        </div>
      </a>
    </li>
  );
}
