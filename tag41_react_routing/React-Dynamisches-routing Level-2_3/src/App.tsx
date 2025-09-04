import { createBrowserRouter, RouterProvider } from "react-router"
import "./App.css"
import CarOverview from "./pages/caroverview/CarOverview"
import Cardetails from "./pages/cardetails/Cardetails"
import Header from "./components/header/Header"
import Layout from "./pages/layout/Layout"

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: CarOverview,
      },
      {
        path: "/:id",
        Component: Cardetails,
      },
      {
        path: "/*",
        element: <div>404, page not found</div>,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
