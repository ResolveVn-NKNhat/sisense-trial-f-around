import { Chart, ScattermapChart } from "@sisense/sdk-ui"
import { measureFactory } from "@sisense/sdk-data"
import * as DM from "../../data/sample-ecommerce"
import Grid from "@mui/material/Grid"
import DashboardCard from "../../components/DashboardCard"

export default function Homepage() {
  return (
    <>
      <h1 className="font-bold text-lg m-3">ECOMMERCE INSIGHTS</h1>
      <Grid container spacing={2} rowSpacing={2} padding={2}>
        <DashboardCard title="Revenue Trend" gridColumns={4}>
          <Chart
            dataSet={DM.DataSource}
            chartType="column"
            dataOptions={{
              category: [DM.Commerce.Date.Quarters],
              value: [
                measureFactory.sum(DM.Commerce.Revenue, "Total Revenue"),
                {
                  column: measureFactory.countDistinct(DM.Commerce.VisitID),
                  showOnRightAxis: true,
                  chartType: "line",
                  title: "# Visits",
                },
              ],
              breakBy: [],
            }}
            styleOptions={{
              subtype: "area/spline",
              xAxis: {
                enabled: false,
              },
            }}
          />
        </DashboardCard>
        <DashboardCard title="Age Demographics" gridColumns={4}>
          <Chart
            dataSet={DM.DataSource}
            chartType="pie"
            dataOptions={{
              category: [DM.Commerce.AgeRange],
              value: [measureFactory.sum(DM.Commerce.Revenue, "Total Revenue")],
              breakBy: [],
            }}
            styleOptions={{
              legend: { enabled: false },
              subtype: "pie/ring",
            }}
          />
        </DashboardCard>
        <DashboardCard title="Buyer Analysis" gridColumns={4}>
          <Chart
            dataSet={DM.DataSource}
            chartType="scatter"
            dataOptions={{
              x: measureFactory.sum(DM.Commerce.Revenue),
              y: measureFactory.countDistinct(DM.Commerce.VisitID),
              breakByPoint: DM.Commerce.Condition,
              breakByColor: DM.Commerce.AgeRange,
            }}
          />
        </DashboardCard>
        <DashboardCard title="Site Popularity" gridColumns={6}>
          <Chart
            dataSet={DM.DataSource}
            chartType="line"
            dataOptions={{
              category: [DM.Commerce.Date.Weeks],
              value: [
                measureFactory.countDistinct(
                  DM.Commerce.VisitID,
                  "Total Visits"
                ),
              ],
              breakBy: [],
            }}
            styleOptions={{
              subtype: "line/spline",
              xAxis: {
                enabled: false,
              },
            }}
          />
        </DashboardCard>
        <DashboardCard title="Geography" gridColumns={6}>
          <ScattermapChart
            dataSet={DM.DataSource}
            dataOptions={{
              geo: [DM.Country.Country],
              size: measureFactory.sum(DM.Commerce.Cost, "Size by Cost"),
              colorBy: {
                column: measureFactory.sum(
                  DM.Commerce.Revenue,
                  "Color by Revenue"
                ),
                color: "#007EA7",
              },
              details: DM.Category.Category,
            }}
          />
        </DashboardCard>
      </Grid>
    </>
  )
}
