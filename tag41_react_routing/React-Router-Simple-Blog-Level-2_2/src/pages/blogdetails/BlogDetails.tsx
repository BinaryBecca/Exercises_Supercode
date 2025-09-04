import React from "react"
import { blogData } from "../../blogData.js"
import Buttons from "../../components/buttons/Buttons.js"
import { useParams } from "react-router"

export default function BlogDetails() {
  const { id } = useParams()
  if (!id) {
    return "404 Error!"
  }

  const blogEntry = blogData.find((entry) => entry.id === Number(id))
  if (!blogEntry) {
    return <p>404, Page not found!</p>
  }
  return (
    <>
      <div className="flex justify-end">
        <img
          src={blogEntry.img_url}
          alt={blogEntry.title}
          className="w-[60rem] h-[30rem] object-cover object-center mb-[1rem]"
        />
      </div>
      <div className="flex flex-row p-[4rem] justify-between">
        <div>
          <p className="mb-[1rem]">{blogEntry.title}</p>
          <p className="mb-[1rem] italic">{blogEntry.description}</p>
          <p className="mb-[1rem] text-xs">{blogEntry.author}</p>
        </div>
        <p>{blogEntry.published_date}</p>
      </div>
      <div className="flex flex-row p-[4rem] justify-between">
        {Number(blogEntry.id) > 0 && (
          <Buttons to={`/blog/${Number(blogEntry.id) - 1}`} buttonText="Backwards"></Buttons>
        )}
        {Number(blogEntry.id) < 5 && <Buttons to={`/blog/${Number(blogEntry.id) + 1}`} buttonText="Forwards"></Buttons>}
      </div>
    </>
  )
}
