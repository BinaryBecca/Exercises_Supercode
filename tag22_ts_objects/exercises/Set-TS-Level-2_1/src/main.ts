const marvelCharacters: string[] = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Wdow", "Spider Man"]

marvelCharacters.push("Iron Man", "Thor")

console.log(marvelCharacters)

// const marvelCharacters2 = marvelCharacters.set()
// ! set() nicht bei arrays

const marvelCharacters2 = new Set(marvelCharacters)

console.log(marvelCharacters2)

// ! Set = streicht doppelte Elemente!
