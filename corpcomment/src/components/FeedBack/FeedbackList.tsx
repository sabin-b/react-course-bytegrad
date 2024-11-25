import { FeedBackItem } from "../../types/types";
import FeedbackItem from "./FeedbackItem";

const feedBacks: FeedBackItem[] = [
  {
    badgeLetter: "B",
    daysBefore: 4,
    hashTag: "sabin",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit parturient morbi, habitasse integer",
    upvoteCount: 573,
  },
  {
    badgeLetter: "B",
    daysBefore: 4,
    hashTag: "sabin",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit parturient morbi, habitasse integer",
    upvoteCount: 573,
  },
  {
    badgeLetter: "B",
    daysBefore: 4,
    hashTag: "sabin",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit parturient morbi, habitasse integer",
    upvoteCount: 573,
  },
  {
    badgeLetter: "B",
    daysBefore: 0,
    hashTag: "sabin",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit parturient morbi, habitasse integer",
    upvoteCount: 573,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedBacks.map((feedback) => (
        <FeedbackItem key={feedback.upvoteCount.toString()} {...feedback} />
      ))}
    </ol>
  );
}
