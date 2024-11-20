import React, { useEffect, useRef, useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>("");
  const [showWarning, setShowWarning] = useState<boolean>(false);
  //? make text area to focus
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  //? handle user inputs
  const handleUserInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //? input value
    let newText = e.target.value;

    //? check input has script tag
    if (newText.includes("<script>")) {
      setShowWarning(true);
      // newText = newText.replace("<script>", " ");
      return;
    }

    //? condition not met update the state
    setValue(newText);
    setShowWarning(false);
  };

  return (
    <React.Fragment>
      <textarea
        ref={ref}
        onChange={handleUserInput}
        value={value}
        className="textarea"
        placeholder="enter your text"
        spellCheck={false}
      />
      {showWarning ? <Warning /> : null}
    </React.Fragment>
  );
}
