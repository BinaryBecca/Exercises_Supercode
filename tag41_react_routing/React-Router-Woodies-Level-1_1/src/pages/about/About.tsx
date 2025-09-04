import React from "react"

export default function About() {
  return (
    <>
      <section className="mt-20 mr-5 mb-20 ml-5">
        <div className="flex flex-row justify-center items-center gap-1 mb-10">
          <img src="/Logo_small.png" alt="logo" />
          <p className="text-4xl font-bold">Who we are </p>
          <div className="border-t-2 border-black-300 w-80"></div>
          <p className="text-[var(--footerColour)] font-bold text-7xl">ABOUT US</p>
        </div>

        <div className="flex flex-row">
          <img src="/About.png" alt="salad bowl" />
          <div className="flex flex-col items-start justify-center p-5 mb-5">
            <h2 className="text-4xl mb-5">
              <span className="font-bold">WOODIES</span> is the{" "}
              <span className="font-bold">home of modern wooden furniture</span>
            </h2>
            <h1 className="text-2xl mb-5d">the answer to your need for furniture with shapes, sizes and colors.</h1>
          </div>
        </div>
      </section>
    </>
  )
}
