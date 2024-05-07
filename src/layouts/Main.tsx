import { Outlet } from "react-router-dom"
import { useThemeStore } from "../stores/useThemeStore"

export default function MainLayout() {
  const { isDarkTheme } = useThemeStore()
  return (
    <>
      <div
        className={`
        w-full min-h-[100vh] flex flex-row
        ${isDarkTheme ? "bg-slate-600 text-white" : "bg-zinc-50 text-slate-800"}
      `}
      >
        <aside></aside>
        <div className="w-full">
          <header></header>
          <main className="p-3">
            <Outlet />
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  )
}
