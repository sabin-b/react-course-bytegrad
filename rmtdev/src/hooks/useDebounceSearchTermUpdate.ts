import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearchTerm, clearSearchTerm } from "../features/job.slice";
import { AppDispatch } from "../store/store";

export default function useDebounceSearchTermUpdate(
  value: string,
  delay: number
) {
  const dispatch: AppDispatch = useDispatch();

  //? run value change based
  useEffect(() => {
    //? check value has length
    if (value.length === 0) {
      const timeOutId = setTimeout(() => dispatch(clearSearchTerm()), delay);
      //? component un mount clear timout
      return () => clearTimeout(timeOutId);
    }
    //? if not empty
    const timeOutId = setTimeout(() => dispatch(addSearchTerm(value)), delay);
    //? component un mount clear timout
    return () => clearTimeout(timeOutId);
  }, [value, delay, dispatch]);
}
