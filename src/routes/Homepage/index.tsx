import { useThemeStore } from "../../stores/useThemeStore"
export default function Homepage() {
  const { isDarkTheme, toggleDarkTheme } = useThemeStore()
  return (
    <>
      <h1 className="font-bold underline">Hello World</h1>
      <button
        className="btn bg-rose-500 p-2 rounded-md text-white"
        onClick={toggleDarkTheme}
      >
        Change theme to {isDarkTheme ? "LIGHT" : "DARK"}
      </button>
    </>
  )
}
