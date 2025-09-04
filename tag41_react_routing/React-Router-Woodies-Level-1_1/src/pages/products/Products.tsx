import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Products() {
  return (
    <>
      <section className="mt-20 mr-5 mb-20 ml-5">
        <div className="flex flex-row justify-center items-center gap-1 mb-10">
          <img src="/Logo_small.png" alt="logo" />
          <p className="text-4xl font-bold">What we have </p>
          <div className="border-t-2 border-black-300 w-80"></div>
          <p className="text-[var(--footerColour)] font-bold text-7xl">PRODUCTS</p>
        </div>

        <div className="flex flex-row justify-evenly">
          <div className="relative">
            <img src="/Tisch.png" alt="table" />
            <p className="absolute top-4 left-4 font-bold text-2xl">Jenson</p>
            <Link
              className="absolute bottom-4 right-4 bg-[var(--yellow)] text-white border-white-1 pt-2 pl-3 pb-2 pr-3 cursor-pointer"
              to="/products/jenson">
              Shop now
            </Link>
          </div>

          <div className="relative">
            <img src="/Stuhl.png" alt="chair" />
            <p className="absolute top-4 left-4 font-bold text-2xl">Deon</p>
            <Link
              className="absolute bottom-4 right-4 bg-[var(--yellow)] text-white border-white-1 pt-2 pl-3 pb-2 pr-3 cursor-pointer"
              to="/products/deon">
              Shop now
            </Link>
          </div>

          <div className="relative">
            <img src="/Schuesseln.png" alt="bowls" />
            <p className="absolute top-4 left-4 font-bold text-2xl">Krisha</p>
            <Link
              className="absolute bottom-4 right-4 bg-[var(--yellow)] text-white border-white-1 pt-2 pl-3 pb-2 pr-3 cursor-pointer"
              to="/products/krisha">
              Shop now
            </Link>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  )
}
