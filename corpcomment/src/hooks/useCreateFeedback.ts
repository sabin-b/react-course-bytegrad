import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FeedBackItem } from "../types/types";
import { keys } from "./keys";

export function useCreateFeedback() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (newItem: FeedBackItem) => {
      const res = await axios.post(import.meta.env.VITE_API_URL, newItem);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [keys.feedbacks],
      });
    },
  });

  return { mutate, isPending };
}
