const bands = new Map<string, string[]>()

bands.set("The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"])
bands.set("Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"])
bands.set("Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"])
bands.set("NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"])
bands.set("Kraftwerk", ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"])

console.log(bands.size)
// ! size bei Map und Set

bands.set("Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"])

console.log(bands.size)

console.log(bands.get("Kraftwerk"))

// letztes Mitglied aus Kraftwerk:
//! length für Arrays! (und Strings)
const mitgliederKraftwerk = bands.get("Kraftwerk")
// console.log(mitgliederKraftwerk)

// console.log(mitgliederKraftwerk[mitgliederKraftwerk.length - 1])
// Fehlermeldung: possibly undefined -> mit if vermeiden!
// bzw. Fehler, falls nicht in Map

if (mitgliederKraftwerk) {
  console.log(mitgliederKraftwerk[mitgliederKraftwerk.length - 1])
}
