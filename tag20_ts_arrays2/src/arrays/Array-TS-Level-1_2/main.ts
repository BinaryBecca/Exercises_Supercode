const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
]
console.log(heroArr)

function showHeroesCleaned() {
  return heroArr.filter(function (value) {
    return value !== undefined && value !== null
  })
}

showHeroesCleaned()

console.log(heroArr)
console.log(showHeroesCleaned())

// const showHeroesCleaned = heroArr.filter(function (value) {
//   return value.includes(undefined, null)
// })
