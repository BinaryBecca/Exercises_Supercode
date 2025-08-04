const resultHTML = document.getElementById("resultHTML") as HTMLDivElement

let index = 2
let outputIndex = "Using do...while loops" + "<p></p>"

do {
  index += 2
  outputIndex += index + "<p></p>"
} while (index < 20)

resultHTML.innerHTML = outputIndex
