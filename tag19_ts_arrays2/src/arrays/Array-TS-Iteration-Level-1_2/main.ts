const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
]

const upperDrinks = drinks.map((element) => element.toUpperCase())
console.log(upperDrinks)

const IlikeDrink = drinks.map((drinks) => `I like ${drinks}`)
console.log(IlikeDrink)

// function upperDrinksFunction(drinkElement: string) {
//   return drinkElement.toUpperCase()
// }
// const upperDrinks = drinks.map(upperDrinksFunction)
// console.log(upperDrinks)

// function IlikeDrinkFunction(IlikeDrinkElement: string) {
//   return `I like ${IlikeDrinkElement}`
// }

// const IlikeDrink = drinks.map(IlikeDrinkFunction)
// console.log(IlikeDrink)
