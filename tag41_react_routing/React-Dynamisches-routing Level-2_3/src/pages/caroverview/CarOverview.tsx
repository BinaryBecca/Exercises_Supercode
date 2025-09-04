import React from "react"
import cars from "../../cars.json"
import { Link } from "react-router"

export default function CarOverview() {
  return (
    <>
      <section className="flex items-center justify-center mt-5">
        <div className="grid grid-cols-4 gap-5">
          {cars.map((carCard) => (
            <div key={carCard.id} className="bg-gray-200 p-10">
              <p>{carCard.carModel}</p>
              <Link to={`/${carCard.id}`} className="text-purple-500">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
