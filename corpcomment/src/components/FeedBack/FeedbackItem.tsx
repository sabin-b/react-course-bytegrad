import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedBackItem } from "../../types/types";

export default function FeedbackItem({
  badgeLetter,
  daysBefore,
  hashTag,
  text,
  upvoteCount,
}: FeedBackItem) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{hashTag}</p>
        <p>{text}</p>
      </div>
      <p>{daysBefore === 0 ? "New" : daysBefore.toString().concat("d")}</p>
    </li>
  );
}
