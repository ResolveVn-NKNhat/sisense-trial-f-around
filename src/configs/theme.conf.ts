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
    bg: "#00000000",
    text: "#1e293b",
  },
  dark: {
    bg: "#00000000",
    text: "#ffffff",
  },
}

export const colorPalette: ColorPalette = {
  red: ["#FB4B4E", "#D10000", "#7C0B2B", "#3E000C"],
  green: ["#6BFFB8", "#2CEAA3", "#2A6041", "#28965A"],
  blue: ["#00A7E1", "#007EA7", "#003459", "#00171F"],
  yellow: ["#EEFC57", "#F1D302", "#FFBC42", "#AE8E1C"],
  slate: ["#D3D3D3", "#808080", "#778899", "#2F4F4F"],
}
