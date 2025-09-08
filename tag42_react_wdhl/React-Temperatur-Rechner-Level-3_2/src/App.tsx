import { useState } from "react"
import "./App.css"
import Input from "./components/input/Input"
import { fahrenheitToCelsius, celsiusToFahrenheit } from "../src/components/logic/Logic"
import Output from "./components/output/Output"

function App() {
  const [celsius, setCelsius] = useState("")
  const [fahrenheit, setFahrenheit] = useState("")

  const changingCelsius = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    console.log(event.target.value)
    const celsiusValue = event.target.value
    setCelsius(celsiusValue)

    const fahrenheitValue = celsiusToFahrenheit(Number(celsiusValue))
    setFahrenheit(String(fahrenheitValue))
  }

  const changingFahrenheit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fahrenheitValue = event.target.value
    setFahrenheit(fahrenheitValue)

    const celsiusValue = fahrenheitToCelsius(Number(fahrenheitValue))
    setCelsius(String(celsiusValue))
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        {/* onchange: React.ChangeEventHandler<HTMLInputElement> */}
        <Input text="Celsius" value={celsius} onchange={changingCelsius} />
        <Input text="Fahrenheit" value={fahrenheit} onchange={changingFahrenheit} />

        <Output celsius={celsius} />
      </div>
    </>
  )
}

export default App
