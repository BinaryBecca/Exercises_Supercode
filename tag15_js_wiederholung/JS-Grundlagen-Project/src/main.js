import "./style.css"

const inputUser = document.querySelector("#inputFeld")
const clickButton = document.querySelector("#buttonFeld")
const resultElement = document.querySelector("#result")

clickButton.addEventListener("click", function () {
  const inputUserValue = inputUser.value
  resultElement.style.backgroundColor = inputUserValue
  //Alternative: document.body.style.backgroundColor = inputUserValue
})
