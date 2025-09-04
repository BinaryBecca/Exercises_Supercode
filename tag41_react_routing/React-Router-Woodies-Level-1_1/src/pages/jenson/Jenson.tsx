import React from "react"
import { Link } from "react-router"

export default function Jenson() {
  return (
    <>
      <section className="m-20">
        <div className="flex flex-row justify-center items-center gap-1 mb-10">
          <img src="/Logo_small.png" alt="logo" />
          <p className="text-4xl font-bold">Jenson </p>
          <div className="border-t-2 border-black-300 w-80"></div>
          <p className="text-[var(--footerColour)] font-bold text-7xl">PRODUCTS</p>
        </div>

        <div className="flex justify-center items-center">
          <img src="/Tisch.png" alt="table" />

          <p className="p-15 text-xl font-bold">
            Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail
            this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic
            retro? You got it.
          </p>
        </div>
      </section>
    </>
  )
}
