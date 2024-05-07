type ThemeConfig = {
  [key: string]: {
    bg: string
    text: string
  }
}

type ColorPalette = {
  [key: string]: string[]
}

export const themeConfig: ThemeConfig = {
  light: {
    bg: "#fafafa",
    text: "#1e293b",
  },
  dark: {
    bg: "#475569",
    text: "#ffffff",
  },
}

export const colorPalette: ColorPalette = {
  "#189DE4": ["#189DE4", "#3B28CC", "#6EFAFB", "#EAC435", "#E40066"],
}
