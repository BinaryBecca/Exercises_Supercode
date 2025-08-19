const loremIpsumArray: string[] = [
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
]

function generateLoremIpsum(numberOfWords: number): Promise<string[]> {
  const indiviualWord: string[] = loremIpsumArray[0].split(" ")
  console.log("individual Words:", indiviualWord)

  return new Promise((resolve, reject) => {
    if (numberOfWords > 50) {
      reject("Number of words cannot exceed 50")
    } else {
      // ! resolve braucht string[]
      const wordLengthStringArray: string[] = indiviualWord.slice(0, numberOfWords)
      resolve(wordLengthStringArray)
    }
  })
}

function wordsUppercase(word: string): string {
  return word.toUpperCase()
}

function withoutSomeLetters(word: string): string {
  const withoutLetter = word.split("L").join("").split("T").join("").split("U").join("")
  return withoutLetter
}

// ! filter = boolean
function wordLongerThanEightCharacters(word: string): boolean {
  // if (word.length > 8) {
  //   return word
  // } else {
  //   return "blabla"
  // }

  return word.length > 8
}

generateLoremIpsum(50)
  .then((result: string[]) => {
    const wordsUppercaseToArray = result.map(wordsUppercase)
    console.log("Uppercase:", wordsUppercaseToArray)
    return wordsUppercaseToArray
  })
  .then((result: string[]) => {
    const withoutSomeLettersToArray = result.map(withoutSomeLetters)
    console.log("Without L, T, U:", withoutSomeLettersToArray)
    return withoutSomeLettersToArray
  })
  .then((result: string[]) => {
    // ! map shows every character!
    // const wordLongerThanEightCharactersToArray = result.map(wordLongerThanEightCharacters)
    const wordLongerThanEightCharactersToArray = result.filter(wordLongerThanEightCharacters)
    console.log("Word longer then 8 characters:", wordLongerThanEightCharactersToArray)
    return wordLongerThanEightCharactersToArray
  })
  .then((result: string[]) => {
    const oneString = result.join("")
    console.log("one string:", oneString)
    return oneString
  })
  .catch((err: Error) => console.error(err))
