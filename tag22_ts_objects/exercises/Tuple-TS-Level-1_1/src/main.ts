const starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hamill"]

const allStarWarsActor: [string, string][] = [
  ["Luke Skywalker", "Mark Hamill"],
  ["Darth Vader", "James Earl Jones"],
  ["Yoda", "Frank Oz"],
  ["Han Solo", "Harrison Ford"],
  ["Princess Leia", "Carrie Fisher"],
]

// Lass dir in einer Schleife den Inhalt auf der Konsole ausgeben:

allStarWarsActor.forEach(([character, actor]) => {
  console.log(`${character} spielt ${actor}`)
})
