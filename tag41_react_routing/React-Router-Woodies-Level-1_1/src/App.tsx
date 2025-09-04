import "./App.css"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Products from "./pages/products/Products"
import Jenson from "./pages/jenson/Jenson"
import Deon from "./pages/deon/Deon"
import Krisha from "./pages/krisha/Krisha"

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/products/jenson",
        Component: Jenson,
      },
      {
        path: "/products/deon",
        Component: Deon,
      },
      {
        path: "/products/krisha",
        Component: Krisha,
      },
    ],
  },
])

function App() {
  return (
    <>
      <div className="font-nunito">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
