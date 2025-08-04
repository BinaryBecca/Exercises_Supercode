// const testString1 = "Hallo wie geht's?"
// const vowelsTestString = getNumberOfVowels(testString1)
// console.log(testString1 + "\n" + vowelsTestString)

function getNumberOfVowels(input: string): number {
  const vowelsArray: string[] = ["A", "E", "I", "O", "U"]
  let numberVowels = 0

  for (const vowel of input.toUpperCase()) {
    if (vowelsArray.includes(vowel)) {
      numberVowels += 1
    }
  }
  return numberVowels
}

const testString2 = "bliblablub"
const vowelsTestString2 = getNumberOfVowels(testString2)
console.log(testString2 + "\n" + vowelsTestString2)
