import "./style.css"

// const formElement = document.querySelector("#formFeld")
const inputElement = document.querySelector("#inputFeld")
const buttonElement = document.querySelector("#buttonFeld")
const resultElement = document.querySelector("#result")

buttonElement.addEventListener("click", function () {
  const zahlInput = inputElement.value * 2
  resultElement.innerHTML = zahlInput
})
