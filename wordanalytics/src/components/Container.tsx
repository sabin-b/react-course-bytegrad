import { useState } from "react";
import {
  FACEBOOK_CHARACTERS_LIMIT,
  INSTAGRAM_CHARACTERS_LIMIT,
} from "../lib/utils";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [value, setValue] = useState<string>("");

  //? counts
  const charactersCount = value.length;
  const wordsCount = value.length ? value.split(" ").filter(Boolean).length : 0;
  const facebookCount = value.length
    ? FACEBOOK_CHARACTERS_LIMIT - value.length
    : FACEBOOK_CHARACTERS_LIMIT;
  const instagramCount = value.length
    ? INSTAGRAM_CHARACTERS_LIMIT - value.length
    : INSTAGRAM_CHARACTERS_LIMIT;

  return (
    <main className="container">
      <Textarea value={value} onChange={setValue} />
      <Stats
        charactersCount={charactersCount}
        wordsCount={wordsCount}
        instagramCount={instagramCount}
        facebookCount={facebookCount}
      />
    </main>
  );
}
