import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getSelectedCompany } from "../../features/feedback.slice";
import useFeedbacks from "../../hooks/useFeedbacks";
import Spinner from "../Spinner";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const { data, isLoading, isError } = useFeedbacks();

  const seletedCompany = useSelector(getSelectedCompany);

  const filteredFeedbacks = useMemo(
    () =>
      !isLoading
        ? data?.feedbacks.filter((feed) => {
            const matcher =
              seletedCompany.toLowerCase() === feed.company.toLowerCase() ||
              seletedCompany === "";
            return matcher;
          })
        : [],
    [data?.feedbacks, isLoading, seletedCompany]
  );

  return (
    <ol className="feedback-list rela">
      {isLoading && (
        <div className="mt-8">
          <Spinner />
        </div>
      )}
      {!isLoading &&
        !isError &&
        filteredFeedbacks.map((feedback) => (
          <FeedbackItem key={feedback.upvoteCount.toString()} {...feedback} />
        ))}
    </ol>
  );
}
