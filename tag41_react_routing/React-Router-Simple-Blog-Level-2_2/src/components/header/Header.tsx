import React from "react"
import { NavLink, useLocation } from "react-router"

export default function Header() {
  const location = useLocation()
  console.log(location)
  console.log(location.pathname)

  return (
    <>
      <header
        className={`${
          location.pathname === "/" ? "absolute w-full bg-transparent text-black" : "bg-white text-black"
        }`}>
        <nav className="flex flex-row justify-between p-5">
          <p className="text-xl">My Life</p>

          <div className="flex justify-between w-1/5">
            <NavLink to="/" className={({ isActive }) => `${isActive ? "underline text-xl" : ""}`}>
              Home
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `${isActive ? "underline text-xl" : ""}`}>
              Blog
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  )
}
