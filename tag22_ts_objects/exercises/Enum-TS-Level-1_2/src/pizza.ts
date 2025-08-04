enum PizzaSize {
  Small,
  Medium,
  Large,
  Family,
}

enum PizzaIngredients {
  Cheese,
  Onion,
  Salami,
  Skittles,
}

type TPizza = {
  PizzaSize: PizzaSize
  ingredients: PizzaIngredients[]
}

const pizzaMargherita: TPizza = {
  PizzaSize: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese],
}

const pizzaFunghi: TPizza = {
  PizzaSize: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese],
}

const pizzaDiavolo: TPizza = {
  PizzaSize: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese],
}

const pizzaCaprese: TPizza = {
  PizzaSize: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese],
}

console.log(pizzaMargherita)
console.log(pizzaFunghi)
console.log(pizzaDiavolo)
console.log(pizzaCaprese)
