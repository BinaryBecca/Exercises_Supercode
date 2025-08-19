const loremIpsumArray: string[] = [
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
]

const indiviualWord: string[] = loremIpsumArray[0].split(" ")
console.log(indiviualWord)

const wordLength: number = indiviualWord.length
console.log(wordLength)

function generateLoremIpsum(numberOfWords: number): Promise<string[]> {
  return new Promise((resolve, reject) => {
    if (numberOfWords > 50) {
      reject("Number of words cannot exceed 50")
    } else {
      resolve(wordLength)
    }
  })
}
function wordsUppercase(word: string): string {
  return word.toUpperCase()
}

generateLoremIpsum()
  .then((result: string[]) => {
    const wordsUppercaseToArray = result.map(wordsUppercase)

    // function wordsUppercase(word: string): string {
    //   return word.toUpperCase()
    // }
    console.log(wordsUppercaseToArray)
    return wordsUppercaseToArray
  })
  .then(() => {})
  .then(() => {})
  .then(() => {})
  .catch((err: Error) => console.error(err))
