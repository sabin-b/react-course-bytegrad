import React, { useEffect, useRef, useState } from "react";
import WarningMessage from "./Warning";

interface TextareaProps {
  onChange: (value: string) => void;
  value: string;
}
export default function Textarea({ value, onChange }: TextareaProps) {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [warningText, setWarningText] = useState<string>("");
  //? make text area to focus initially
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  //? handle user inputs
  const handleUserInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //? input value
    let newText = e.target.value;

    //? check input has script tag and @
    if (newText.includes("<script>")) {
      setWarningText("script tag found !");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("@ symbol found !");
      newText = newText.replace("@", "");
    }

    //? update the state
    onChange(newText);

    //? 5 seconds after remove warning text
    setTimeout(() => {
      setWarningText("");
    }, 5000);
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
      {warningText.length ? <WarningMessage warningText={warningText} /> : null}
    </React.Fragment>
  );
}
