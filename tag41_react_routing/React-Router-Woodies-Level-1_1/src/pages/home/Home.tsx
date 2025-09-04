import React from "react"
import { Link } from "react-router"

export default function Home() {
  return (
    <>
      <div className="absolute -top-40 -bottom-40 -right-30 w-3/10 bg-[var(--pink)]"></div>
      <section className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-start justify-center p-5 mb-5">
          <h2 className="text-2xl mb-5">
            Are you looking for <span className="font-bold">woodden furniture</span> for your place?
          </h2>
          <h1 className="text-4xl mb-5 font-bold">This is the Right Place</h1>

          <Link
            to="/products"
            className="bg-[var(--yellow)] text-white border-white-1 pt-2 pl-3 pb-2 pr-3 cursor-pointer">
            Explore Products
          </Link>
        </div>

        <div className="relative">
          <img className="relative z-10" src="/Home.png" alt="Table" />
          {/* <div className="absolute -top-40 bottom-0 -right-30 w-full bg-[var(--pink)]"></div> */}
        </div>
      </section>
    </>
  )
}
