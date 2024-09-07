import { useMutation, useQueryClient } from "@tanstack/react-query";

import { novelQueryKey } from "./queryKey";
import { getCookie } from "@/common/util/cookieUtils";
import { DeleteNovel } from "@/services/novel/novelService";

type mutationMethodType = "post" | "delete" | "update";

export const useNovelMutation = (novelId = "", mutationMethod: mutationMethodType) => {
  const queryClient = useQueryClient();
  const token = getCookie("next-auth.session-token");

  return useMutation({
    mutationFn: () => {
      switch (mutationMethod) {
        case "delete":
          return DeleteNovel(novelId, token);
        case "post":
          return DeleteNovel(novelId, token);
        case "update":
          return DeleteNovel(novelId, token);
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
