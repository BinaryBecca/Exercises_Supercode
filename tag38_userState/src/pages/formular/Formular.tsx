import React, { useState } from "react"
import Buttons from "../../components/buttons/Buttons"
import Counter from "../../components/counter/Counter"
import Input from "../../components/input/Input"

export default function Formular() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <button onClick={() => setDarkMode(!darkMode)}>
          <img className="w-10 h-10" src="/pink-moon.png" alt="darkmode icon" />
        </button>
        <div className="flex items-center justify-center flex-col mt-5">
          <Buttons />
          <Counter />
          <Input />
        </div>
      </div>
    </>
  )
}
