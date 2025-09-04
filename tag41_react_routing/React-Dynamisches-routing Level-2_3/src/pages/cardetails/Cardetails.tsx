import React from "react"
import cars from "../../cars.json"
import { Link, useParams } from "react-router"

export default function Cardetails() {
  const { id } = useParams()
  if (!id) {
    return "404, Page not found!"
  }

  const carInformation = cars.find((car) => car.id === Number(id))
  if (!carInformation) {
    return "404, Page not found!"
  }
  return (
    <>
      <div className=" flex flex-col justify-center items-center font-bold h-screen gap-10">
        <div className=" flex flex-col justify-center items-center">
          <p>{carInformation.carModel}</p>
          <p>{carInformation.CarMake}</p>
          <p>{carInformation.CarYear}</p>
        </div>
        <div className="flex flex-row justify-between gap-15">
          {Number(carInformation.id) > 1 && (
            <Link to={`/${Number(carInformation.id) - 1}`} className="text-gray-400 border border-gray-400 rounded">
              Backwards
            </Link>
          )}

          {Number(carInformation.id) < 20 && (
            <Link to={`/${Number(carInformation.id) + 1}`} className="text-gray-400 border border-gray-400 rounded">
              Forwards
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
