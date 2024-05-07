import { create } from "zustand"

type ThemeState = {
  variantColor: string
  isDarkTheme: boolean
  setVariantColor: (variantColor: string) => void
  toggleDarkTheme: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  variantColor: "blue",
  isDarkTheme: false,
  setVariantColor: (variantColor) => set(() => ({ variantColor })),
  toggleDarkTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
}))
