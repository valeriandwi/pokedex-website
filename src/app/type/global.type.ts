export type APIResponse<T> = {
  data: T;
};

export type ThemeColor = {
  paginationBorderColor?: string;
  paginationSelectedColor?: string;
  paginationTextColor?: string;
};

export type PaginationSize = "small" | "medium";
