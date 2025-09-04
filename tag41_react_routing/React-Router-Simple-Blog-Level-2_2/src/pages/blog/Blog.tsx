import React from "react"
import { blogData } from "../../blogData.js"
import Buttons from "../../components/buttons/Buttons.js"

export default function Blog() {
  return (
    <>
      <ul className="p-[2rem] flex flex-row flex-wrap gap-[1rem]">
        {blogData.map((entry) => (
          <li key={entry.id} className="mb-[1rem]">
            <img
              src={entry.img_url}
              alt={entry.title}
              className="w-[20rem] h-[10rem] object-cover object-center mb-[1rem]"
            />
            <p className="mb-[1rem]">{entry.title}</p>
            <Buttons to={`/blog/${entry.id}`} buttonText="Read more"></Buttons>
          </li>
        ))}
      </ul>
    </>
  )
}
