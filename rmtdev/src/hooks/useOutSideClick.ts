import React, { useEffect } from "react";

export default function useOutSideClick(
  refs: React.MutableRefObject<HTMLElement | null>[],
  close: () => void
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (refs.every((ref) => !ref.current?.contains(e.target as Node))) {
        close();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [close, refs]);
}
