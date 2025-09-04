import React from "react"
import { Link } from "react-router"

interface ButtonProps {
  buttonText: string
  to: string
}

export default function Buttons({ buttonText, to }: ButtonProps) {
  return (
    <>
      <Link
        to={to}
        className="text-[var(--buttonColor)] font-bold border-[var(--buttonColor)] border-3 p-[.6rem] rounded-[1.2rem]">
        {buttonText}
      </Link>
    </>
  )
}
