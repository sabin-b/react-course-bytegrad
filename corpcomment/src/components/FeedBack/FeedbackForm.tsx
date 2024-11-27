import React, { useMemo } from "react";
import { useCreateFeedback } from "../../hooks/useCreateFeedback";
import { MAX_CHARACTERS } from "../../lib/constants";
import cn from "../../lib/utils";
import { FeedBackItemType } from "../../types/types";

export default function FeedbackForm() {
  const [text, setText] = React.useState<string>("");
  const [isValidText, setisValidText] = React.useState<
    "valid" | "invalid" | ""
  >("");
  const { mutate, isPending } = useCreateFeedback();

  const maxCharctersAllowed = useMemo(
    () => MAX_CHARACTERS - text.length,
    [text]
  );

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    //? prevent page reload
    e.preventDefault();

    //? company
    const company = text
      .split(" ")
      .find((text) => text.includes("#"))
      ?.substring(1);

    if (text.includes("#")) {
      setisValidText("valid");
      setTimeout(() => setisValidText(""), 1000);
    } else {
      setisValidText("invalid");
      setTimeout(() => setisValidText(""), 1000);

      return;
    }

    //? new item
    const newFeedBack: FeedBackItemType = {
      id: new Date().getTime(),
      badgeLetter: company!.substring(0, 1).toUpperCase(),
      company: company!,
      daysAgo: 0,
      text,
      upvoteCount: 0,
    };

    //? new item
    mutate(newFeedBack, { onSuccess: () => setText("") });
  };

  return (
    <form
      onSubmit={handleForm}
      className={cn(
        "form",
        isValidText === "valid" && "form--valid",
        isValidText === "invalid" && "form--invalid"
      )}
    >
      <textarea
        id="feedback-textarea"
        placeholder="blabla"
        className="overflow-y-auto"
        style={{ scrollbarWidth: "thin" }}
        spellCheck={false}
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={MAX_CHARACTERS}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{maxCharctersAllowed}</p>
        <button type="submit">
          <span>{isPending ? "Submitting" : "Submit"}</span>
        </button>
      </div>
    </form>
  );
}
