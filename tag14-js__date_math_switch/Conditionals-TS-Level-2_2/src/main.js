import "./style.css"

const rangeInput = document.getElementById("points")
const pageBackground = document.querySelector("body")

const luftqualität = document.getElementById("luftqualität")

const healthConcern = document.getElementById("healthConcern")
const healthEffect = document.getElementById("healthEffect")

// //!!!!!!!!! ohne addEventListener passiert nichts : )
//! Option1: Globale funtion deklarieren checkAirQuality(); addEventListener vor/nach der function aufrufen (nur nicht bei function expressions!)
// checkAirQuality()

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

  // console.log(checkAirQuality())
  //global -> function also nicht lokal aufrufbar!
}

checkAirQuality()

rangeInput.addEventListener("input", checkAirQuality)
console.log(checkAirQuality())

//! Option2: function in addEventListener deklarieren (lokal)
//! Problem: Funktion kann nicht global aufgerufen werden; wird also nicht einmal direkt beim Laden der Seite ausgeführt
//! -> z.b. Luftqualität: (wert) erst sichtbar, sobald user Slider benutzt!

// rangeInput.addEventListener("input", function checkAirQuality() {
//   const rangeInputValue = Number(rangeInput.value)

//   if (rangeInputValue < 50) {
//     pageBackground.style.background = "green"
//     luftqualität.innerText = `Luftqualität: ${rangeInputValue}`
//     healthConcern.innerText = "Level of health concern: Good"
//     healthEffect.innerText = "Level of health effect: Little or no risk"
//   } else if (rangeInputValue >= 50 && rangeInputValue < 100) {
//     pageBackground.style.background = "yellow"
//     luftqualität.innerText = `Luftqualität: ${rangeInputValue}`
//     healthConcern.innerText = "Level of health concern: Moderate"
//     healthEffect.innerText = "Level of health effect: Acceptable quality"
//   } else if (rangeInputValue >= 100 && rangeInputValue < 150) {
//     pageBackground.style.background = "orange"
//     luftqualität.innerText = `Luftqualität: ${rangeInputValue}`
//     healthConcern.innerText = "Level of health concern: Unhealthy for sensitive groups"
//     healthEffect.innerText = "Level of health effect: Generanle publics notlikely affected"
//   } else {
//     pageBackground.style.background = "red"
//     luftqualität.innerText = `Luftqualität: ${rangeInputValue}`
//     healthConcern.innerText = "Level of health concern: Big"
//     healthEffect.innerText = "Level of health effect: Death"
//   }

//   console.log(checkAirQuality())
// })
