import { create } from "zustand";
import { ThemeColor } from "../type/global.type";

type ThemeState = {
  themeColor: ThemeColor;
};

type ThemeAction = {
  resetTheme: () => void;
  setTheme: (themeColor: ThemeColor) => void;
};

const DEFAULT_THEME = {
  paginationBorderColor: "#fff",
  paginationSelectedColor: "#E6AB09",
  paginationTextColor: "#fff",
};

const useThemeStore = create<ThemeState & ThemeAction>((set) => ({
  themeColor: DEFAULT_THEME,
  resetTheme: () => set(() => ({ themeColor: DEFAULT_THEME })),
  setTheme: (theme: ThemeColor) => set(() => ({ themeColor: theme })),
}));

export default useThemeStore;
