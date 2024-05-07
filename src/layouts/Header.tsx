import { useState } from "react"
import { useNavStore } from "../stores/useNavStore"
import { useThemeStore } from "../stores/useThemeStore"
import Navbar, { type NavbarType } from "../components/Navbar"
import Bubble from "../components/Bubble"
import Toggle from "../components/Button/Toggle"
import { IconMenu, IconCog, IconGithub } from "../components/Icons"

export default function Header() {
  const [isSettingsEnabled, toggleSettings] = useState(false)
  const { isHeader, toggleNav, toggleSidebar } = useNavStore()
  const { isDarkTheme, toggleDarkTheme, variantColor } = useThemeStore()

  const UpperHeader = () => (
    <div
      className={`
        flex flex-row items-center justify-between p-3
      text-white shadow-md 
        ${isDarkTheme ? "shadow-gray-500" : "shadow-gray-400"} 
        ${
          variantColor === "red"
            ? "bg-red-600"
            : variantColor === "blue"
              ? "bg-blue-600"
              : variantColor === "green"
                ? "bg-[#91CB3E]"
                : variantColor === "yellow"
                  ? "bg-[#F1D302]"
                  : "bg-slate-800"
        }
      `}
    >
      <div>
        <div className="flex flex-row gap-3">
          <IconMenu
            width={24}
            height={24}
            className={
              isHeader ? "hidden" : "md:hidden animate-pulse cursor-pointer"
            }
            onClick={() => toggleSidebar(true)}
          />
          <div className={isHeader ? "block" : " block md:hidden"}>
            TRIALSENSE
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 p-1">
        <div className="relative">
          <IconCog
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => {
              toggleSettings(!isSettingsEnabled)
            }}
          />
          <Bubble isOpen={isSettingsEnabled}>
            <strong>Menu</strong>
            <div className="w-full flex flex-row justify-between items-center gap-2">
              <span className="w-full">
                {isHeader ? "Horizontal" : "Vertical"}
              </span>
              <Toggle state={isHeader} onClick={toggleNav} />
            </div>
            <br />
            <strong>Dark theme</strong>
            <div className="w-full flex flex-row justify-between items-center gap-2">
              <span className="w-full">{isDarkTheme ? "On" : "Off"}</span>
              <Toggle state={isDarkTheme} onClick={toggleDarkTheme} />
            </div>
          </Bubble>
        </div>
        <a
          title="Visit GitHub Repo"
          href="https://github.com/ResolveVn-NKNhat/sisense-trial-f-around"
          target="_blank"
          className="flex flex-row gap-1 items-center animate-pulse"
        >
          <IconGithub width={24} height={24} className="cursor-pointer" />
          <span className="hidden md:block text-sm">GitHub</span>
        </a>
      </div>
    </div>
  )

  return (
    <header className="w-full flex flex-col select-none">
      <UpperHeader />
      <Navbar type={"header" as NavbarType} />
    </header>
  )
}
