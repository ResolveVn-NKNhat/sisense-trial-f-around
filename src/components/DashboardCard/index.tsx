import { ReactNode } from "react"
import { useThemeStore } from "../../stores/useThemeStore"
import Grid from "@mui/material/Grid"

type DashboardCardProps = {
  title?: string
  height?: number
  gridColumns: number
  children?: ReactNode
}

const DashboardCard = (props: DashboardCardProps) => {
  const { isDarkTheme } = useThemeStore()
  return (
    <Grid item xs={props.gridColumns}>
      <div className={isDarkTheme ? "p-3 bg-slate-800" : "p-3 bg-white"}>
        <h1 className="font-bold text-lg">{props.title || ""}</h1>
        {props.children}
      </div>
    </Grid>
  )
}

export default DashboardCard
