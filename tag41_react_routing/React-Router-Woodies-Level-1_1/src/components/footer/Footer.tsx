import React from "react"

export default function Footer() {
  return (
    <>
      <footer className="relative flex flex-row items-center justify-between bg-[var(--footerColour)] pb-5 z-10">
        <div className="flex flex-col gap-3 p-5">
          <div className="border-t-2 border-gray-300 w-full"></div>
          <img src="/Logo.png" alt="picture of desk and chair" />
          <p>(012) 8967453</p>
          <p>woodies@gmail.com</p>
          <p>Jakarta, Indonesia</p>
        </div>

        <div>
          <img src="/Footer.png" alt="" />
          <div className="flex text-center align-bottom text-xs">© 2020 WOODIES</div>
        </div>
      </footer>
    </>
  )
}
