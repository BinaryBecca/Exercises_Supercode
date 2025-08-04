// do...while loop

const textOutputHTML = document.querySelector<HTMLDivElement>("#textOutputHTML")

let i = 1
let outputArray = ""

do {
  outputArray += `The number is: ${i}` + "<p></p>"
  // console.log((textOutputHTML.innerText = `The number is: ${i}`))
  i++
} while (i <= 5)

textOutputHTML.innerHTML = outputArray
