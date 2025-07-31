const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120]

const celsius = fahrenheit.map((element) => Math.round((element - 32) / 1.8))
console.log(celsius)

//bonus
function fahrenheitToCelsius(element: number) {
  return Math.round((element - 32) / 1.8)
}
// console.log(fahrenheitToCelsius())

const celsius2 = fahrenheit.map(fahrenheitToCelsius)
console.log(celsius2)
