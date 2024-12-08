import React from "react";
import { PaginationDirection } from "../types/types";

interface PaginationButtonProps {
  children: React.ReactNode;
  currentPage: number;
  direction: PaginationDirection;
  onClick: (direction: PaginationDirection) => void;
}

export default function PaginationButton({
  children,
  currentPage,
  direction,
  onClick,
}: PaginationButtonProps) {
  return (
    <button onClick={() => onClick(direction)} className="pagination__button">
      {direction === "previous" ? (
        <>
          {children} {currentPage} page
        </>
      ) : (
        <>
          {currentPage} page {children}
        </>
      )}
    </button>
  );
}
