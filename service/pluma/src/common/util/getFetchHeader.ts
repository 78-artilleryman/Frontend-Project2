export const getFetchHeader = (token = "", contentType: "a" | "m"): HeadersInit => {
  switch (contentType) {
    case "a":
      return {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      };
    case "m":
      return {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      };
    default:
      return {};
  }
};
