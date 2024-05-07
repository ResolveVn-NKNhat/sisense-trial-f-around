import { useNavStore } from "../../stores/useNavStore"
import { useThemeStore } from "../../stores/useThemeStore"
import { navRouter } from "../../routes"
import Navbtn, { type NavbtnProps } from "./Navbtn"

export type NavbarType = "sidebar" | "header"

type NavbarProps = {
  type: NavbarType
}

export default function Navbar({ type }: NavbarProps) {
  const { isHeader, isSidebar, isSidebarActive, toggleSidebar } = useNavStore()
  const { isDarkTheme } = useThemeStore()

  const isNavDisplayed =
    type === "sidebar" ? isSidebar : type === "header" ? isHeader : null

  if (isNavDisplayed === null) {
    return <></>
  }

  const classList = isHeader
    ? `shadow-lg select-none
       ${isDarkTheme ? "bg-slate-950" : "bg-zinc-200"} 
      `
    : `min-h-[100vh] min-w-[220px] h-full
       shadow-lg select-none absolute md:relative md:ml-0
       ${isDarkTheme ? "bg-slate-950 shadow-gray-500" : "bg-zinc-200 shadow-gray-400"}
       ${isSidebarActive ? "left-0 z-[100]" : "-ml-[220px]"}
      `
  return (
    <>
      {/* Navbar */}
      <nav className={isNavDisplayed ? classList : "hidden"}>
        {isSidebar ? <div className="mb-3 p-3">TRIALSENSE</div> : <></>}
        <ul
          onClick={() => toggleSidebar(false)}
          className={isHeader ? "flex flex-row" : "flex flex-col"}
        >
          {navRouter.map((route: NavbtnProps) => {
            return (
              <Navbtn
                key={route.path}
                path={route.path}
                text={route.text}
                description={route.description}
              />
            )
          })}
        </ul>
      </nav>
      {/* Black background in mobile view for sidebar */}
      {isSidebar && isSidebarActive && (
        <div
          onClick={() => toggleSidebar(false)}
          className="absolute w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-[99] md:hidden"
        />
      )}
    </>
  )
}
