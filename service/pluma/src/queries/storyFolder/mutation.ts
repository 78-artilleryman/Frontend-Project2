import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storyFolderQueryKey } from "./queryKey";
import { getClientSideCookie } from "@/common/util/cookieUtils";
import { DeleteSotryFolder, PostSotryFolder } from "@/services/storyFolder/service";
import { PostStoryFolderRequest } from "@/types/storyFolder/request.type";

type mutationMethodType = "post" | "delete" | "update";

export const useNovelMutation = (
  folderId = "",
  mutationMethod: mutationMethodType,
  bodyData?: PostStoryFolderRequest
) => {
  const queryClient = useQueryClient();
  const token = getClientSideCookie("next-auth.session-token");

  return useMutation({
    mutationFn: async () => {
      switch (mutationMethod) {
        case "delete":
          return await DeleteSotryFolder({ folderId }, token);
        case "post":
          if (!bodyData) throw new Error("Body data is required for posting a story folder");
          return await PostSotryFolder(bodyData, token);
        case "update":
          return await DeleteSotryFolder({ folderId }, token);
        default:
          throw new Error("Invalid mutation method");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: storyFolderQueryKey.list().queryKey,
      });
    },
    onError: error => {
      console.error("Error:", error);
    },
  });
};
