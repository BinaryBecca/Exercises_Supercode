import React from "react"

type OutputProps = {
  // result: string
  celsius: string
}

export default function Output({ celsius }: OutputProps) {
  const currentTemperature = Number(celsius)
  const result = currentTemperature >= 100 ? "boiling" : "not boiling"
  return (
    <>
      <div className="w-150 text-center">The water is {result}</div>
    </>
  )
}
