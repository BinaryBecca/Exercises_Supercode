import "./style.css"

const rangeInput = document.getElementById("points")
const pageBackground = document.querySelector("body")

const healthConcern = document.getElementById("healthConcern")
const healthEffect = document.getElementById("healthEffect")

const luftqualität = document.getElementById("luftqualität")

function checkAirQuality() {
  const rangeInputValue = Number(rangeInput.value)

  if (rangeInputValue < 50) {
    pageBackground.style.background = "green"
    luftqualität.innerText = `Luftqualität: ${rangeInputValue}`
    healthConcern.innerText = "Level of health concern: Good"
    healthEffect.innerText = "Level of health effect: Little or no risk"
  } else if (rangeInputValue >= 50 && rangeInputValue < 100) {
    pageBackground.style.background = "yellow"
    luftqualität.innerText = `Luftqualität: ${rangeInputValue}`
    healthConcern.innerText = "Level of health concern: Moderate"
    healthEffect.innerText = "Level of health effect: Acceptable quality"
  } else if (rangeInputValue >= 100 && rangeInputValue < 150) {
    pageBackground.style.background = "orange"
    luftqualität.innerText = `Luftqualität: ${rangeInputValue}`
    healthConcern.innerText = "Level of health concern: Unhealthy for sensitive groups"
    healthEffect.innerText = "Level of health effect: Generanle publics notlikely affected"
  } else {
    pageBackground.style.background = "red"
    luftqualität.innerText = `Luftqualität: ${rangeInputValue}`
    healthConcern.innerText = "Level of health concern: Big"
    healthEffect.innerText = "Level of health effect: Death"
  }
}

checkAirQuality()

//!!!!!!!!! ohne addEventListener passiert nichts : )
rangeInput.addEventListener("input", checkAirQuality)
