import "./styles.css"

enum ClothingColor {
  Gelb = "#FFFF00",
  Orange = "#ffa500",
  Pink = "#ffc0cb",
  Blau = "#0000FF",
  Lila = "#800080",
  Grau = "#808080",
}

const allColors: ClothingColor[] = [
  ClothingColor.Gelb,
  ClothingColor.Orange,
  ClothingColor.Pink,
  ClothingColor.Blau,
  ClothingColor.Lila,
  ClothingColor.Grau,
]

const btnElement = document.querySelectorAll(".btnElement")

btnElement.forEach((btnColor, index) => {
  btnColor.style.backgroundColor = allColors[index]
})

// # Object.keys; Object.values
enum ClothingColor2 {
  Gelb = "#FFFF00",
  Orange = "#ffa500",
  Pink = "#ffc0cb",
  Blau = "#0000FF",
  Lila = "#800080",
  Grau = "#808080",
}

Object.keys(ClothingColor2)
console.log(Object.keys(ClothingColor2))

Object.values(ClothingColor2)
console.log(Object.values(ClothingColor2))

const btnElement2 = document.querySelectorAll(".btnElement2")

btnElement2.forEach((btnColor, index) => {
  btnColor.style.backgroundColor = Object.values(ClothingColor2)[index]
})
