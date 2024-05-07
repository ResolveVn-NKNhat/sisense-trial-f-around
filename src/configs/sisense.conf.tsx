import React from "react"
import { SisenseContextProvider, ThemeProvider } from "@sisense/sdk-ui"
import { useThemeStore } from "../stores/useThemeStore"
import { themeConfig, colorPalette } from "./theme.conf"

type SisenseProviderProps = {
  children: React.ReactNode
}

const SisenseContextProviderArgs = () => {
  const baseOptions = {
    url: import.meta.env.VITE_APP_SISENSE_URL,
    defaultDataSource: "Sample ECommerce",
  }
  const wat = import.meta.env.VITE_APP_SISENSE_WAT
  const token = import.meta.env.VITE_APP_SISENSE_API_TOKEN
  const ssoEnabled = import.meta.env.VITE_APP_SISENSE_SSO_ENABLED as string

  if (ssoEnabled) {
    return { ...baseOptions, ssoEnabled: ssoEnabled.toLowerCase() === "true" }
  } else if (wat) {
    return { ...baseOptions, wat }
  } else if (token) {
    return { ...baseOptions, token }
  } else {
    return baseOptions
  }
}

const SisenseThemeProviderArgs = (isDarkTheme: boolean, palette: string[]) => ({
  theme: {
    chart: {
      backgroundColor: themeConfig[isDarkTheme ? "dark" : "light"].bg,
      textColor: themeConfig[isDarkTheme ? "dark" : "light"].text,
    },
    palette: {
      variantColors: palette,
    },
  },
})

export default function SisenseProvider({ children }: SisenseProviderProps) {
  const { isDarkTheme, variantColor } = useThemeStore()
  return (
    <SisenseContextProvider {...SisenseContextProviderArgs()}>
      <ThemeProvider
        {...SisenseThemeProviderArgs(isDarkTheme, colorPalette[variantColor])}
      >
        {children}
      </ThemeProvider>
    </SisenseContextProvider>
  )
}
