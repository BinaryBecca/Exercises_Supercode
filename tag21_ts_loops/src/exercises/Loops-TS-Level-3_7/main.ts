const allGermanLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

function encryption(word: string): string {
  let rot13 = ""

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toUpperCase()
    const indexOfRegularAlphabet = allGermanLetters.indexOf(letter)
    const indexOfRot13Alphabet = (indexOfRegularAlphabet + 13) % allGermanLetters.length
    rot13 = rot13 + allGermanLetters[indexOfRot13Alphabet]

    if (letter === " ") {
      rot13 = rot13 + " "
    }
  }
  return rot13
}

console.log("Hello World")
console.log(encryption("Hello World")) //URYYBM JBEYQ

console.log("Ich kann jetzt Saetze verschluesseln")
console.log(encryption("Ich kann jetzt Sätze verschlüsseln")) //VPUM XNAAM WRGMGM FMGMRM IREFPUYMFFRYA
