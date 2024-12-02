import React, { useEffect } from "react";

export default function useActiveJobId() {
  const [activeJobId, setActiveJobId] = React.useState<number | null>(null);

  useEffect(() => {
    const hashChangeClick = () => {
      const jobId = Number.parseInt(window.location.hash.slice(1));
      setActiveJobId(jobId);
    };
    hashChangeClick();

    //? hashchange or popstate event by we can listen
    window.addEventListener("hashchange", hashChangeClick);

    return () => window.removeEventListener("hashchange", hashChangeClick);
  }, []);
  return activeJobId;
}
