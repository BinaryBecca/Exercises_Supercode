import React from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {
  // const location = useLocation()
  // console.log(location)

  // let pinkNav = ""

  // if (location.pathname === "/") {
  //   pinkNav = "top-0 bg-[var(--pink)]"
  // }

  return (
    <>
      <header>
        <nav className="relative flex flex-row items-center justify-between p-4 z-10">
          <img src="/Logo.png" alt="Logo" />
          <div className="flex flex-row items-center gap-8">
            <NavLink className="text-l" to="/">
              Home
            </NavLink>
            <NavLink className="text-l" to="/about">
              About Us
            </NavLink>
            <NavLink className="text-l" to="/products">
              Products
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  )
}
