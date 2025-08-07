import IceCreamFlavor from "./classes/IceCreamFlavor"

const IceCreamFlavor1 = new IceCreamFlavor("Vanille", 2, true, "schmackofatz")
const IceCreamFlavor2 = new IceCreamFlavor("Schokolade", 2, true, "schmackofatz")
const IceCreamFlavor3 = new IceCreamFlavor("Erdbeere", 2, true, "schmackofatz")
const IceCreamFlavor4 = new IceCreamFlavor(
  "Hundescheiße",
  2,
  false,
  "nur weil es braun ist, ist es nicht gleich Schokolade"
)

const allIceCreamFlavors = [IceCreamFlavor1, IceCreamFlavor2, IceCreamFlavor3, IceCreamFlavor4]

// allIceCreamFlavors.forEach((flavor) => {
//   if (flavor._isPopular === true) {
//     console.log(flavor)
//   } else {
//     console.log("💩")
//   }
// })

allIceCreamFlavors.forEach((flavor) => {
  flavor.printInfo()
  flavor.getTotalPrice(2)
  flavor.getLengthOfDescription()
})

// # BONUS
const iceCreamContainer = document.getElementById("icecreamflavors") as HTMLDivElement

allIceCreamFlavors.forEach((flavor) => {
  const divIceCream = document.createElement("div")
  const nameIceCream = document.createElement("h3")
  const priceIceCream = document.createElement("p")
  const popularIceCream = document.createElement("div")
  if (flavor._isPopular) {
    popularIceCream.textContent = "⭐"
  }

  divIceCream.appendChild(nameIceCream)
  divIceCream.appendChild(priceIceCream)
  divIceCream.appendChild(popularIceCream)

  iceCreamContainer.appendChild(divIceCream)
})
