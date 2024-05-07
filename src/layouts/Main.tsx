import { Outlet } from "react-router-dom"
import { useNavStore } from "../stores/useNavStore"
import { useThemeStore } from "../stores/useThemeStore"
import Navbar, { type NavbarType } from "../components/Navbar"
import Header from "./Header"

export default function MainLayout() {
  const { isSidebar } = useNavStore()
  const { isDarkTheme } = useThemeStore()
  return (
    <>
      <div
        className={`
        w-full min-h-[100vh] font-noto flex flex-row
        ${isDarkTheme ? "bg-[#353739] text-white" : "bg-zinc-50 text-slate-800"}
      `}
      >
        {isSidebar ? (
          <aside>
            <Navbar type={"sidebar" as NavbarType} />
          </aside>
        ) : (
          <></>
        )}
        <div className="w-full">
          <Header />
          <main className="p-3">
            <Outlet />
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  )
}
