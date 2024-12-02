import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addSearchTerm } from "../features/job.slice";
import useDebounceSearchTermUpdate from "../hooks/useDebounceSearchTermUpdate";
import { AppDispatch } from "../store/store";

export default function SearchForm() {
  const [searchText, setSearchText] = React.useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  //? update search term with debounce
  useDebounceSearchTermUpdate(searchText.trim(), 1000);

  //? handle form submission
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    //? prevent page reload
    e.preventDefault();

    //? if no search term throw error message
    if (!searchText.trim().length) {
      toast.error("Please enter the search term");
      return;
    } else if (searchText.trim().length) {
      dispatch(addSearchTerm(searchText.trim()));
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        spellCheck="false"
        type="text"
        placeholder="Find remote developer jobs..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
