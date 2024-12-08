import { TriangleDownIcon } from "@radix-ui/react-icons";
import React, { useRef } from "react";
import useOutSideClick from "../hooks/useOutSideClick";
import BookmarksPopover from "./BookmarksPopover";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  useOutSideClick([btnRef, divRef], () => setIsOpen(false));

  //? className based
  // useEffect(() => {
  //   function handleClick(e: MouseEvent) {
  //     if (
  //       e.target instanceof HTMLElement &&
  //       !e.target.closest(".bookmarks-btn") &&
  //       !e.target.closest(".bookmarks-popover")
  //     ) {
  //       setIsOpen(false);
  //     }
  //   }

  //   document.addEventListener("click", handleClick);

  //   return () => document.removeEventListener("click", handleClick);
  // }, []);

  //? refs
  // useEffect(() => {
  //   const handleClick = (e: MouseEvent) => {
  //     if (
  //       e.target instanceof HTMLElement &&
  //       btnRef.current &&
  //       divRef.current &&
  //       !btnRef.current.contains(e.target) &&
  //       !divRef.current.contains(e.target)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClick);

  //   return () => document.removeEventListener("click", handleClick);
  // }, []);

  return (
    <section>
      <button
        ref={btnRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bookmarks-btn"
      >
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover ref={divRef} />}
    </section>
  );
}
