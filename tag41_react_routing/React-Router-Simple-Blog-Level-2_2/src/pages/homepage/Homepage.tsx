import React from "react"
import Buttons from "../../components/buttons/Buttons"

export default function Homepage() {
  return (
    <>
      <section className="relative -z-10">
        <img src="/homepage_background.jpg" alt="" />
      </section>
      <section className="flex flex-col items-start m-[4rem] gap-[.8rem]">
        <h1 className="text-[2rem]">Welcome to my simple Blog</h1>
        <Buttons buttonText="Go to articles" to="/blog" />
      </section>
    </>
  )
}
