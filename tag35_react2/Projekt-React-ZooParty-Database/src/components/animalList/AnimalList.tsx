import React from "react"
import animals from "../../data/data"
import Animaltem from "../animalItem/Animaltem"

export default function AnimalList() {
  return (
    <>
      <section>
        {animals.map((animal, index) => {
          return (
            <div key={index}>
              <Animaltem animal={animal} />
            </div>
          )
        })}
      </section>
    </>
  )
}
