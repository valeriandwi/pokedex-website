import { create } from "zustand";
import { DEFAULT_PER_PAGE_NUMBER } from "../constants/constants";

type PaginationState = {
  numberPerPage: number;
  pageNumber: number;
};

type PaginationAction = {
  setNumberPerPage: (numberPerPage: number) => void;
  setPageNumber: (pageNumber: number) => void;
};

const usePaginationStore = create<PaginationState & PaginationAction>(
  (set) => ({
    numberPerPage: DEFAULT_PER_PAGE_NUMBER,
    pageNumber: 1,
    setNumberPerPage: (numberPerPage: number) =>
      set(() => ({ numberPerPage: numberPerPage })),
    setPageNumber: (pageNumber: number) =>
      set(() => ({ pageNumber: pageNumber })),
  })
);

export default usePaginationStore;
