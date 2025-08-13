import "./style.css"

// - Nutzen kannst du folgende Befehle und Methoden:
//     - addEventListener
//     - setInterval()
//     - clearInterval()
//     - if, else if
//     - querySelector() oder getElementById()

const btnElement = document.getElementById("btn") as HTMLButtonElement
const showCurrentPercentage = document.querySelector(".zeit") as HTMLDivElement

// const intervalID = window.setInterval(timeFunction, 1000)
let intervalID: number

function timeFunction(a: number, b: number) {
  let start = a
  // let end = b
  // let intervalID

  intervalID = setInterval(() => {
    if (start <= b) {
      clearInterval(intervalID)
    } else {
      start--
      showCurrentPercentage.innerHTML = `${start}%`
    }
  }, 300)

  // if (start <= b) {
  //   clearInterval(intervalID)
  // }
}

btnElement.addEventListener("click", () => {
  timeFunction(100, 0)
})
