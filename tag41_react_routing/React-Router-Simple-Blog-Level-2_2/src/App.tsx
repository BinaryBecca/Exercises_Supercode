import { createBrowserRouter, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./pages/layout/Layout"
import Homepage from "./pages/homepage/Homepage"
import Blog from "./pages/blog/Blog"
import BlogDetails from "./pages/blogdetails/BlogDetails"

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Homepage,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/blog/:id",
        Component: BlogDetails,
      },
      {
        path: "/*",
        element: <p>404, no entry found</p>,
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
