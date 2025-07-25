const bundeslandInfo = document.querySelector("#bundeslandInfo")
const buttonElement = document.querySelector("#buttonElement")
const bundeslandInfoErgebnis = document.querySelector("#bundeslandInfoErgebnis")

// const Text = `Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt
// Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt`

// const bundesländerText = Text.trim().split("\n")

// const bundeslandArray = bundesländerText.map((bundesland) => {
//   return bundesland.split(" hat")[0].trim()
// })

console.log(bundeslandArray)

bundeslandArray
buttonElement.addEventListener("click", function () {
  const userInput = bundeslandInfo.value

  if (userInput.toLowerCase() === "baden-würtemberg") {
    bundeslandInfoErgebnis.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
  } else if (userInput.toLowerCase() === "bayern") {
    bundeslandInfoErgebnis.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
  }
})
