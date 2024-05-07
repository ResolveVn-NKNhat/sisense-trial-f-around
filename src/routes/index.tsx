import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { NavbtnProps } from "../components/Navbar/Navbtn"
import MainLayout from "../layouts/Main"
import Homepage from "./Homepage"

export const navRouter: NavbtnProps[] = [
  {
    path: "/",
    text: "Homepage",
    description: "Go to Homepage",
  },
  {
    path: "/",
    text: "Insights",
    description: "See ECommerce insights",
  },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/insights",
        element: <Homepage />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
