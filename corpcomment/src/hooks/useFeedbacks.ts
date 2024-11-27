import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FeedBackItemType } from "../types/types";
import { keys } from "./keys";

interface useFeedbacksReturnProps {
  data: {
    feedbacks: FeedBackItemType[];
    public: boolean;
    sorted: boolean;
  };
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export default function useFeedbacks(): useFeedbacksReturnProps {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [keys.feedbacks],
    queryFn: async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);

        if (response.status !== 200) {
          throw new Error('"something went wrong"');
        }
        return response.data;
      } catch (error) {
        let message = "something went wrong";
        if (error instanceof AxiosError) {
          message = error.message;
        }
        return message;
      }
    },
  });

  return { data, isLoading, error, isError };
}
