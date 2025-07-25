const birthYearInput = document.querySelector("#birthYearElement")
const buttonInput = document.querySelector("#buttonElement")
const resultOutput = document.querySelector("#result")

const today = new Date()
console.log(today.getFullYear())
const modernYear = today.getFullYear()

buttonInput.addEventListener("click", function (event) {
  event.preventDefault()

  const birthYearValue = Number(birthYearInput.value)

  //! Achtung modernYear ist doch schon eine Zahl!!!!!!
  // const modernYearValue = Number(modernYear.value)

  resultOutput.innerHTML = modernYear - birthYearValue
})
