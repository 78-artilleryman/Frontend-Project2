import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storyFileQueryKey } from "./queryKey";
import { getClientSideCookie } from "@/common/util/cookieUtils";
import { DeleteSotryFile, PostSotryFile } from "@/services/storyFile/service";
import { PostStoryFileRequest } from "@/types/storyFile/request.type";

type mutationMethodType = "post" | "delete" | "update";

export const useNovelMutation = (fileId = "", mutationMethod: mutationMethodType, bodyData?: PostStoryFileRequest) => {
  const queryClient = useQueryClient();
  const token = getClientSideCookie("next-auth.session-token");

  return useMutation({
    mutationFn: async () => {
      switch (mutationMethod) {
        case "delete":
          return await DeleteSotryFile({ fileId }, token);
        case "post":
          if (!bodyData) throw new Error("Body data is required for posting a storyFile");
          return await PostSotryFile(bodyData, token);
        case "update":
          return await DeleteSotryFile({ fileId }, token);
        default:
          throw new Error("Invalid mutation method");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: storyFileQueryKey.list().queryKey,
      });
    },
    onError: error => {
      console.error("Error:", error);
    },
  });
};
