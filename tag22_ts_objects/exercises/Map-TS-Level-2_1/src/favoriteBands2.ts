import bands from "../../Map-TS-Level-1_1/src/favoriteBands"

console.log("Map-TS-Level-2_1:")

if (bands.has("Metallica")) {
  console.log("yep, metallica is there")
} else {
  console.log("no metallica")
}

bands.set("U2", ["test", "test", "test", "test"])
console.log(bands.get("U2"))

// Rückgabe: Letzter Eintrag
