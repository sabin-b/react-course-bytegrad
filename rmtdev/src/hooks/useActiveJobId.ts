import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActiveJobId, getActiveJobId } from "../features/job.slice";
import { AppDispatch } from "../store/store";

export default function useActiveJobId() {
  const dispatch: AppDispatch = useDispatch();
  const activeJobId = useSelector(getActiveJobId);

  useEffect(() => {
    const hashChangeClick = () => {
      const jobId = Number.parseInt(window.location.hash.slice(1));
      dispatch(addActiveJobId(jobId));
    };
    hashChangeClick();

    //? hashchange or popstate event by we can listen
    window.addEventListener("hashchange", hashChangeClick);

    return () => window.removeEventListener("hashchange", hashChangeClick);
  }, [dispatch]);

  return activeJobId;
}
