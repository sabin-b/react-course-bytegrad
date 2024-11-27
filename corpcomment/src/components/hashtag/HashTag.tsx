import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedCompany,
  removeFilter,
} from "../../features/feedback.slice";
import useFeedbacks from "../../hooks/useFeedbacks";
import { AppDispatch } from "../../store/store";
import HashTagItem from "./HashTagItem";

export default function HashTag() {
  const { data, isLoading } = useFeedbacks();
  const seletedCompany = useSelector(getSelectedCompany);
  const dispatch: AppDispatch = useDispatch();
  const hashtags = useMemo(
    () =>
      !isLoading
        ? Array.from(
            data.feedbacks.reduce((acc, curr) => {
              acc.add(curr.company);
              return acc;
            }, new Set<string>())
          )
        : [],
    [data?.feedbacks, isLoading]
  );

  return (
    <ul className="hashtags">
      {hashtags.map((company) => (
        <HashTagItem key={company} company={company} />
      ))}
      {seletedCompany.length ? (
        <li>
          <button
            onClick={() => dispatch(removeFilter())}
            className="bg-indigo-400/10"
          >
            ResetFilter
          </button>
        </li>
      ) : null}
    </ul>
  );
}
