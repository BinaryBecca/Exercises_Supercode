import { singersTwo } from "./main"

// - Assets:
//     - arrow-function
//     - filter
//     - includes()
//     - return

console.log(singersTwo)
console.log(singersTwo[0].name)

const searchInput = document.getElementById("searchInput") as HTMLInputElement
const searchButton = document.getElementById("search-button") as HTMLButtonElement
const resultHTML = document.getElementById("table-container") as HTMLDivElement

// const singersTwoFirstName: string = singersTwo.filter((word) => word)
// beatles, elvis, michael, elton, madonna, led, rihanna, pink
const resultName1 = singersTwo.filter((singer) => {
  return singer.name.toLowerCase().includes("beatles")
})
console.log(resultName1)

searchButton.addEventListener("click", (e: Event) => {
  e.preventDefault()

  if (searchInput.value === "beatles") {
    resultHTML.innerHTML = singersTwo[0].name
  }
})
