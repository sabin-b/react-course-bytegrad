import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../config/axiosInstance";
import { JobItem } from "../types/types";
import { tanstackQueryKeys } from "./tanstackQueryKeys";

interface useJobsReturnValues {
  data: {
    jobItems: JobItem[];
  };
  isLoading: boolean;
  isError: boolean;
}

export default function useJobs(searchTerm: string): useJobsReturnValues {
  const { data, isLoading, isError } = useQuery({
    queryKey: [tanstackQueryKeys.fetchJobs, searchTerm],
    queryFn: async () => {
      if (!searchTerm.length) return { jobItems: [] };
      const response = await axiosInstance.get("data", {
        params: { search: searchTerm },
      });
      return response.data;
    },
  });

  return { data, isLoading, isError };
}
