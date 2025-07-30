import "./style.css"

// #1
function userAge(birthYear: number): number {
  return new Date().getFullYear() - birthYear
}

// console.log(new Date().getFullYear())
console.log(userAge(1000))

// #2
function userAgeDifference(userOneAge: number, userTwoAge: number): number {
  const altersDifferenz = userOneAge - userTwoAge
  return altersDifferenz
}

console.log(userAgeDifference(100, 10))
