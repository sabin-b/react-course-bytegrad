import { TriangleUpIcon } from "@radix-ui/react-icons";
import React from "react";
import cn from "../../lib/utils";
import { FeedBackItemType } from "../../types/types";

export default function FeedbackItem({
  badgeLetter,
  company,
  daysAgo,
  text,
  upvoteCount,
}: FeedBackItemType) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [upvoteCountState, setUpdateUpVoteCount] = React.useState(upvoteCount);

  function handleUpvoteCount(e: React.MouseEvent<HTMLButtonElement>) {
    //? prevent event bubbling
    e.stopPropagation();

    //? update
    setUpdateUpVoteCount((prev) => prev + 1);

    //? disabled the button
    e.currentTarget.disabled = true;
  }

  return (
    <li
      className={cn("feedback", open && "feedback--expand")}
      onClick={() => setOpen((prev) => !prev)}
    >
      <button onClick={handleUpvoteCount}>
        <TriangleUpIcon />
        <span>{upvoteCountState}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo === 0 ? "New" : daysAgo.toString().concat("d")}</p>
    </li>
  );
}
