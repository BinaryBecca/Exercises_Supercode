type TLager = {
  schreibtisch: {
    schublade: string
  }
  schrank: {
    "Obere Schublade": {
      Ordner1: string
      Ordner2: string
    }
    "Untere Schublade": string
  }
}

const unserLager: TLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
}

console.log(unserLager.schrank["Obere Schublade"].Ordner2)
console.log(unserLager.schrank["Untere Schublade"])
console.log(unserLager.schreibtisch.schublade)

// defineProperty?
// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
// Object.defineProperties(object, descriptors)

// Accessing a Property
// Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
// Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
// Object.getOwnPropertyNames(object)

// Accessing the prototype
// Object.getPrototypeOf(object)
