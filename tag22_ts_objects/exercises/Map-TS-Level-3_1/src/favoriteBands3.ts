import bands from "../../Map-TS-Level-1_1/src/favoriteBands"

console.log("Map-TS-Level-3_1:")

if (bands.size < 12) {
  bands.forEach((member, bandName) => {
    console.log(`Band: ${bandName}, Members: ${member.join(", ")}, Length: ${bandName.length}`)
  })
}

// bands.forEach((member, bandName) => {
//   if (bands.size < 12) {
//     console.log(`Band: ${bandName}, Member: ${member.join(", ")}, Length: ${bandName.length}`)
//   }
// })
