import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../layouts/Main"
import Homepage from "./Homepage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
