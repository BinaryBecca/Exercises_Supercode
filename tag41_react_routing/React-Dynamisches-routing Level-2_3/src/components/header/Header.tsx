import React from "react"
import { Link } from "react-router"

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center p-5">
      <h1 className="text-xl font-bold">SuperCarlist</h1>
      <Link to="/" className="text-gray-400 border border-gray-400 rounded">
        Home
      </Link>
    </header>
  )
}
