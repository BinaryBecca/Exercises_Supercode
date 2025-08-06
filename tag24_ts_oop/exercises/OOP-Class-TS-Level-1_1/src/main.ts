// - Lege in einer neuen Datei eine Klasse mit dem Namen IceCreamFlavor an
// - Die Klasse soll folgende Attribute haben
//     - name: string
//     - price: number
//     - isPopular: boolean
//     - description: string → optional
// - name soll beim Anlegen ‘’ sein, price = 0, isPopular = false und description = undefined

class IceCreamFlavor {
  _name: string = ""
  _price: number = 0
  _isPopular: boolean = false
  _description?: string = "undefined"

  constructor(name: string, price: number, isPopular: boolean, description: string) {
    this._name = name
    this._price = price
    this._isPopular = isPopular
    this._description = description
  }
}

// Lege 4 Instanzen von IceCreamFlavor an und setze deren Eigenschaften
// ! Instanz = Objekt
const IceCreamFlavor1 = new IceCreamFlavor("Vanille", 2, true, "schmackofatz")
const IceCreamFlavor2 = new IceCreamFlavor("Schokolade", 2, true, "schmackofatz")
const IceCreamFlavor3 = new IceCreamFlavor("Erdbeere", 2, true, "schmackofatz")
const IceCreamFlavor4 = new IceCreamFlavor(
  "Hundescheiße",
  2,
  false,
  "nur weil es braun ist, ist es nicht gleich Schokolade"
)

// Lege die 4 Instanzen in einem Array ab
const allIceCreamFlavors = [IceCreamFlavor1, IceCreamFlavor2, IceCreamFlavor3, IceCreamFlavor4]

// Lass dir von allen populären Eissorten (isPopular) den Namen auf der Konsole ausgeben
// ! for...of => für Objekte
for (const flavor of allIceCreamFlavors) {
  if (flavor._isPopular === true) {
    console.log(flavor)
  } else {
    console.log("💩")
  }
}

// und noch forEach just for fun : )
allIceCreamFlavors.forEach((flavor) => {
  if (flavor._isPopular === true) {
    console.log(flavor)
  } else {
    console.log("💩")
  }
})

//
//
//
//
//
// ! Achtung IceCreamFlavor = Klasse => hat keine Instanz-Eigenschaften(_isPopular)!
// _isPopular ist nur Eigenschaft von new IceCreamFlavor()

// if (IceCreamFlavor._isPopular === true) {
//   console.log(IceCreamFlavor)
// }
// ! führt nur erstes true aus!:
// if (IceCreamFlavor1._isPopular === true) {
//   console.log(IceCreamFlavor1)
// } else if (IceCreamFlavor2._isPopular === true) {
//   console.log(IceCreamFlavor2)
// } else if (IceCreamFlavor3._isPopular === true) {
//   console.log(IceCreamFlavor3)
// } else if (IceCreamFlavor4._isPopular === true) {
//   console.log(IceCreamFlavor4)
// } else {
//   console.log("💩")
// }
