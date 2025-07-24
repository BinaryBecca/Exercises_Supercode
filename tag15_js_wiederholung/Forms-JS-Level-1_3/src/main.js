import "./style.css"

const age1Input = document.querySelector("#age1").value
console.log(age1Input)
const age2Input = document.querySelector("#age2").value
console.log(age2Input)
const ageDifference = Number(age1Input) - Number(age2Input)

const buttonInput = document.querySelector("#button")

const finalResult = document.querySelector("#result")

buttonInput.addEventListener("click", function (event) {
  event.preventDefault()
  finalResult.innerHTML = ageDifference
})
