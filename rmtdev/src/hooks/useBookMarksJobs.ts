import { useQueries } from "@tanstack/react-query";
import { axiosInstance } from "../config/axiosInstance";
import { JobItemSingle } from "../types/types";
import { tanstackQueryKeys } from "./tanstackQueryKeys";

type useBookMarksJobsProps = number[];

type useBookMarksJobsReturnType = {
  isLoading: boolean;
  isError: boolean;
  data: JobItemSingle[];
};

export default function useBookMarksJobs(
  bookMarkIds: useBookMarksJobsProps
): useBookMarksJobsReturnType {
  const results = useQueries({
    queries: bookMarkIds.map((bookMark) => ({
      queryKey: [tanstackQueryKeys.fetchJob, bookMark],
      queryFn: async () => {
        const response = await axiosInstance.get(`data/${bookMark}`);
        return response.data;
      },
    })),
  });

  const isLoading = results.some((item) => item.isLoading);
  const isError = results.some((item) => item.isError);
  const data = results.map((res) => res.data?.jobItem).filter(Boolean);

  return {
    isError,
    isLoading,
    data,
  };
}
