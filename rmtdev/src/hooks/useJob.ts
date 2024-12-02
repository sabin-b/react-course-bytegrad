import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../config/axiosInstance";
import { JobItemSingle } from "../types/types";
import { tanstackQueryKeys } from "./tanstackQueryKeys";
import useActiveJobId from "./useActiveJobId";

interface useJobReturn {
  data: {
    jobItem: JobItemSingle;
  };
  isError: boolean;
  isLoading: boolean;
}

export default function useJob(): useJobReturn {
  const activeJobId = useActiveJobId();
  const { data, isLoading, isError } = useQuery({
    queryKey: [tanstackQueryKeys.fetchJob, activeJobId],
    queryFn: async () => {
      if (!activeJobId) return { jobItem: {} };
      const response = await axiosInstance.get(`data/${activeJobId}`);
      return response.data;
    },
  });
  return { data, isError, isLoading };
}
