import { useMutation, useQueryClient } from "@tanstack/react-query";

import { novelQueryKey } from "./queryKey";
import { getClientSideCookie } from "@/common/util/cookieUtils";
import { DeleteNovel, PostNovel } from "@/services/novel/novelService";
import { PostNovelRequest } from "@/types/novel/request.type";

type mutationMethodType = "post" | "delete" | "update";

export const useNovelMutation = (novelId = "", mutationMethod: mutationMethodType, bodyData?: PostNovelRequest) => {
  const queryClient = useQueryClient();
  const token = getClientSideCookie("next-auth.session-token");

  return useMutation({
    mutationFn: async () => {
      switch (mutationMethod) {
        case "delete":
          return await DeleteNovel(novelId, token);
        case "post":
          if (!bodyData) throw new Error("Body data is required for posting a novel");
          return await PostNovel(bodyData, token);
        case "update":
          return await DeleteNovel(novelId, token);
        default:
          throw new Error("Invalid mutation method");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: novelQueryKey.slider({ sort: "createdAt", page: 1, limit: 8 }).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: novelQueryKey.slider({ sort: "updatedAt", page: 1, limit: 8 }).queryKey,
      });
    },
    onError: error => {
      console.error("Error:", error);
    },
  });
};
