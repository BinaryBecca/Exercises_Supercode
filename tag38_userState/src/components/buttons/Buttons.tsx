import React, { useState } from "react"

export default function Buttons() {
  const [clickButton, setclickButton] = useState<boolean>(false)
  const [clickSecondButton, setclickSecondButton] = useState<boolean>(false)
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-red-100 text-red-700 p-5 w-200">
        Why is React great?
        <button
          onClick={() => setclickButton(!clickButton)}
          className="flex items-center justify-center bg-orange-100 text-red-700 p-5 text-l font-bold rounded">
          next
        </button>
      </div>

      {clickButton ? (
        <>
          <div className="bg-white h-[1px]"></div>

          <div className="flex flex-row items-center justify-between bg-rosa text-red-700 p-5 w-200">
            Fast learning curve
            <button
              onClick={() => setclickSecondButton(!clickSecondButton)}
              className="flex items-center justify-center bg-orange-100 text-red-700 p-5 text-l font-bold rounded">
              next
            </button>
          </div>
        </>
      ) : (
        false
      )}
      {/* {clickButton && <p className="bg-black text-white p-5 w-50">Fast learning curve</p>} */}

      {clickSecondButton ? (
        <>
          <div className="bg-white h-[1px]"></div>
          <div className="bg-red-100 text-red-700 p-5 w-200">
            React is very a simple and lightweight library that only deals with the view layer. It is not a beast like
            other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start
            developing an awesome web application after only a couple of days reading tutorial. As the React guide says
            ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table,
            but it will become much easier and natural as you gain experience with it.
          </div>
        </>
      ) : (
        false
      )}
    </>
  )
}
