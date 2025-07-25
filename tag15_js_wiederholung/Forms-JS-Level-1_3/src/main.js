import "./style.css"

const age1Input = document.querySelector("#age1")
// console.log(age1Input)
const age2Input = document.querySelector("#age2")
// console.log(age2Input)

const buttonInput = document.querySelector("#buttonElement")

const finalResult = document.querySelector("#result")

buttonInput.addEventListener("click", function (event) {
  event.preventDefault()

  const age1InputValue = age1Input.value
  const age2InputValue = age2Input.value

  const ageDifference = Number(age1InputValue) - Number(age2InputValue)

  finalResult.innerHTML = "Die Differenz ist: " + ageDifference
})
