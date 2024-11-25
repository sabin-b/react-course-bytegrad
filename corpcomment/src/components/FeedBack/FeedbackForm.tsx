import React, { useMemo } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

export default function FeedbackForm() {
  const [text, setText] = React.useState<string>("");

  const maxCharctersAllowed = useMemo(
    () => MAX_CHARACTERS - text.length,
    [text]
  );

  return (
    <form className="form">
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
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
