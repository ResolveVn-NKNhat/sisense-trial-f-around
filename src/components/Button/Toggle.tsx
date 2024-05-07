import { MouseEventHandler } from "react"

type ToggleProps = {
  state: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}

export default function Toggle({ state, onClick }: ToggleProps) {
  return (
    <div
      onClick={onClick}
      className={`
        ${state ? "bg-green-400" : "bg-gray-500"} w-12 h-4 p-[2px] 
        relative rounded-lg cursor-pointer
      `}
    >
      <div
        className={`absolute bg-white rounded-full w-3 h-3${state ? " right-[2px]" : ""}`}
      />
    </div>
  )
}
