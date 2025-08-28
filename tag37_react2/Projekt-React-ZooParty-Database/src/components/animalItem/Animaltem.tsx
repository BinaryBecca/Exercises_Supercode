import React from "react"

interface Animal {
  animal: {
    name: string
    species: string
    habitat: string
    lifespan: number
    diet: string
    funFacts: string[]
    emoji: string
  }
}

export default function Animaltem({ animal }: Animal) {
  return (
    <>
      <div className="border border-black-400 p-5 m-5">
        <p>Name: {animal.name}</p>
        <p>Species: {animal.species}</p>
        <p>Habitat: {animal.habitat}</p>
        <p>Lifespan: {animal.lifespan}</p>
        <p>Diet: {animal.diet}</p>
        <p>funFacts: {animal.funFacts}</p>
        <p>Emoji: {animal.emoji}</p>
      </div>
    </>
  )
}
