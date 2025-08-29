import React, { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState<number>(0)

  const plus = () => {
    setCounter(counter + 1)
  }
  const minus = () => {
    setCounter(counter - 1)
  }
  const reset = () => {
    setCounter(0)
  }

  return (
    <>
      <div className="bg-white h-[10px]"></div>
      <div className="flex flex-col items-center justify-center bg-red-100 text-red-700 p-5 w-200 gap-5">
        <div className="flex flex-row items-center justify-between w-90">
          <button
            onClick={plus}
            className="flex items-center justify-center bg-orange-100 text-red-700 p-5 w-3 h-3 text-2xl font-bold rounded">
            +
          </button>
          <div className="text-2xl">{counter}</div>
          <button
            onClick={minus}
            className="flex items-center justify-center bg-orange-100 text-red-700 p-5 w-3 h-3 text-2xl font-bold rounded">
            -
          </button>
        </div>
        <button
          onClick={reset}
          className="flex items-center justify-center bg-orange-100 text-red-700 text-l p-2.5 font-bold rounded">
          Reset
        </button>
      </div>
    </>
  )
}
