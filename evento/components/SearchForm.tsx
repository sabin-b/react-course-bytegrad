"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function SearchForm() {
  const [searchInput, setSearchInput] = React.useState("");
  const router = useRouter();

  //? handle form submit
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    //? prevent page reload
    e.preventDefault();

    //? value exist or not
    if (!searchInput.length) {
      return;
    }

    //? other wise redirect
    router.push(`/events/${searchInput}`);
  }

  return (
    <form onSubmit={handleFormSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg px-6 outline-none bg-white/[10%] ring-accent focus:bg-white/10 focus:ring-1"
        placeholder="Search events in any city"
        spellCheck={false}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
}
