const woerter: string[] = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
  "Nur großE Es",
]

const lessThanSix = woerter.filter(function (value) {
  return value.length <= 6
})

console.log(lessThanSix)

const wordsWithE = woerter.filter(function (value) {
  return value.toLowerCase().includes("e")
})

console.log(wordsWithE)

// function lessThanSix() {
//   return (function (value) {
//     return value
//   })
// }
