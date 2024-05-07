import { Link } from "react-router-dom"
import { useThemeStore } from "../../stores/useThemeStore"

export type NavbtnProps = {
  path: string
  text: string
  description?: string
}

export default function Navbtn({ path, text, description }: NavbtnProps) {
  const { isDarkTheme } = useThemeStore()
  return (
    <Link
      to={path}
      title={description}
      className={`
        p-3 py-2 font-bold
        ${isDarkTheme ? "hover:bg-[#151031] text-white" : "hover:bg-zinc-300 text-black"}
      `}
    >
      <li>{text}</li>
    </Link>
  )
}
