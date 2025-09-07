import React from "react"

// - Celsius in Fahrenheit umrechnen:
//     - ({variable}°F - 32) * 5 / 9

// - Fahrenheit in Celsius umrechnen:
//     - ({variable}°C * 9 / 5) + 32

// export default function Logic() {
//   const fahrenheitToCelsius = (fahrenheit: number) => { return (fahrenheit -32) * 5 / 9}
//   const celsiusToFahrenheit = (celsius: number) => { return (celsius * 9 / 5) + 32}

//   return (
//     <>
//       <div></div>
//     </>
//   )
// }

export const fahrenheitToCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9
}
export const celsiusToFahrenheit = (celsius: number) => {
  return (celsius * 9) / 5 + 32
}
