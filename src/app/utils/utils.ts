export const getTypeIdFromURL = (url: string) =>
  (url && url?.split("/").at(-2)) || "1";
