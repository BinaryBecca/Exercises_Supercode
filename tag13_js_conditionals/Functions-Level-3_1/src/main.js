import "./style.css"

const pageBackground = document.getElementById("backgroundColor")
const headerColor = document.getElementById("headerColor")

const ballOne = document.querySelector(".ballOne")
const ballTwo = document.querySelector(".ballTwo")
const ballThree = document.querySelector(".ballThree")
const ballFour = document.querySelector(".ballFour")

ballOne.addEventListener("click", function () {
  pageBackground.style.background = "green"
  headerColor.style.color = "purple"
})

ballTwo.addEventListener("click", function () {
  pageBackground.style.background = "yellow"
  headerColor.style.color = "darkorchid"
})

ballThree.addEventListener("click", function () {
  pageBackground.style.background = "orange"
  headerColor.style.color = "brown"
})

ballFour.addEventListener("click", function () {
  pageBackground.style.background = "lightblue"
  headerColor.style.color = "rebeccapurple"
})
