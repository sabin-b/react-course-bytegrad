import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  moveNextPage,
  movePreviousPage,
} from "../features/job.slice";
import { AppDispatch } from "../store/store";
import { PaginationDirection } from "../types/types";
import { PAGE_SIZE } from "../utils/constants";
import PaginationButton from "./PaginationButton";

interface PaginationProps {
  totalItems: number;
}

export default function Pagination({ totalItems }: PaginationProps) {
  const currentPage = useSelector(getCurrentPage);
  const dispatch: AppDispatch = useDispatch();
  const totalPages = Math.round(totalItems / PAGE_SIZE);

  function handlePaginationBtnClick(direction: PaginationDirection) {
    if (direction === "previous") {
      dispatch(movePreviousPage());
    } else {
      dispatch(moveNextPage());
    }
  }
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          currentPage={currentPage - 1}
          onClick={handlePaginationBtnClick}
        >
          <ArrowLeftIcon />
        </PaginationButton>
      )}
      {currentPage < totalPages && (
        <span style={{ fontSize: "10px" }}>
          Page of {currentPage} / {totalPages}
        </span>
      )}
      {currentPage < totalPages && (
        <PaginationButton
          direction="next"
          currentPage={currentPage + 1}
          onClick={handlePaginationBtnClick}
        >
          <ArrowRightIcon />
        </PaginationButton>
      )}
    </section>
  );
}
