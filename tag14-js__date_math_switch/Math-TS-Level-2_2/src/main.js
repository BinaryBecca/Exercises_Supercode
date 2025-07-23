const userInput = window.prompt("Schätze eine Nummer zwischen 1 und 10.")

const userInputNum = Number(userInput)

const randomNum = Math.floor(Math.random() * 10 + 1)
console.log(randomNum)

if (userInputNum === randomNum) {
  window.prompt("Glückwunsch du hast richtig geraten! 🎉🎉🎉")
} else if (userInputNum <= 10) {
  window.prompt("Leider falsch, beim nächsten Mal klappt es bestimmt 😊")
} else if (userInputNum >= 1) {
  window.prompt("Leider falsch, beim nächsten Mal klappt es bestimmt 😊")
}
